export const getSavedCarIds = () => {
  const savedCarIds = localStorage.getItem('saved_cars')
    ? JSON.parse(localStorage.getItem('saved_cars'))
    : [];

  return savedCarIds;
};

export const saveCarIds = (CarIdArr) => {
  if (CarIdArr.length) {
    localStorage.setItem('saved_cars', JSON.stringify(CarIdArr));
  } else {
    localStorage.removeItem('saved_cars');
  }
};

export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : null;

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

  return true;
};
