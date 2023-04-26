const { AuthenticationError } = require('apollo-server-express');
const { User, Car, Product } = require('../models');
const { signToken } = require('../utils/auth');
//second () contains API key, currently a public test key to later be replaced with a custom key set to test mode and imported using a .env file
const stripe = require('stripe')('pk_test_51N0XmWDAUytjOyUALDTvBl7rqy19lubqzbgRYnAfH5XIuJcavXy96boJ7l2TJH8Mr6BrD0XhS1bBCQLMtTb6yOaP00eehxSPhb');

const resolvers = {
  Query: {
    //user garage
    garage: async (parent, args, context) => {
      //if logged in
      if (context.user) {
        const garage = await User.findById(context.user.id).populate('ownedCars');
        console.log(garage);
        
        return "Well";
      }
      //else
      throw new AuthenticationError('Please log in to view your garage.')
    },
 
    //car oil types
    oil: async (parent, { _id }) => {
      const product = await Product.findById(_id);
      return product;
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await Product.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
      //new user
      addUser: async (parent, args) => {
        //create a new user with the passed arguments
        const user = await User.create(args);
        //define a sign in token for the new user
        const token = signToken(user);
        //return token and user to login
        return { token, user };
      },
      //delete user
      deleteUser: async (parent, args, context) => {
        //if the user is logged in...
        if (context.user) {
          return await User.findByIdAndDelete(context.user);
        }
        //else throw login error
        throw new AuthenticationError('You must be logged in to perform this action.')
      },
      //add car to garage
      addCar: async (parent, args, context) => {
        //if the user is logged in...
        if (context.user) {
          //define the car to add with passed in argument
          const car = new Car( args );
          //push the car to the user's garage
          await User.findByIdAndUpdate(context.user.id, { $push: { ownedCars: car } }, { new: true });
          //return
          return car;
        }
        //else throw login error
        throw new AuthenticationError('You must be logged in to perform this action.')
      },
      //remove car from garage
      removeCar: async (parent, args, context) => {
        //if the user is logged in...
        if (context.user) {
          const car = new Car({ args });
          return await User.findByIdAndDelete(context.user.id, { $pull: { cars: car }}, { new:true });
        }
      },
      //login
      login: async (parent, { email, password }) => {
        //grab entered email
        const user = await User.findOne({ email });

        //throw error if there's no user with the given email
        if (!user) {
          throw new AuthenticationError('Incorrect login information.');
        }

        //grab entered password
        const correctPw = await user.isCorrectPassword(password);

        //throw error if the password is incorrect
        if (!correctPw) {
          throw new AuthenticationError('Incorrect login information.');
        }
        
        //if there are no errors, return the token and sign the user in
        const token = signToken(user);
        return { token, user };
      }
    },
};

module.exports = resolvers;
