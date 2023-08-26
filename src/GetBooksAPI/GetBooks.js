// Getting all BOOKS from db.JSON
export const getBooks = async () => {
  let url = `http://localhost:3001/books/`;
  const res = await fetch(url);
  const data = await res.json();
  if (data) {
    return data;
  } else {
    return "Data not found";
  }
};

// Getting  books by ID from db.JSON
export const getBookById = async (id) => {
  let url = `http://localhost:3001/books/?id=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data) {
    return data[0];
  } else {
    return "Data not found";
  }
};

// Getting  books by CATEGORY from db.JSON
export const getBooksByCategory = async (category) => {
  let url = `http://localhost:3001/books/?category=${category}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data) {
    return data;
  } else {
    return "Data not found";
  }
};
