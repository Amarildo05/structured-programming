// Create a simple Bookstore Management System using JavaScript classes and asynchronous operations.
// You will define a Book class to represent individual books and a Bookstore class to manage a collection of books.
// You will also implement functionality to add books to the store, find a book by its title asynchronously, and calculate the total price of all books in the store.

class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

class Bookstore {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBookByTitle(title) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundBook = this.books.find((book) => book.title === title);
        if (foundBook) {
          resolve(foundBook);
        } else {
          reject(new Error(`Book not found.`));
        }
      }, 2000);
    });
  }

  calculateTotalPrice() {
    let total = 0;
    this.books.forEach((book) => (total += book.price));
    return total;
  }
}

const myBookstore = new Bookstore();

const book1 = new Book("Lahuta e malcís", "Gjergj Fishta", 20);
const book2 = new Book("Kështjella", "Ismail Kadare", 22);

myBookstore.addBook(book1);
myBookstore.addBook(book2);

myBookstore
  .findBookByTitle("Kështjella")
  .then((foundBook) => {
    console.log("Found book:", foundBook);
  })
  .catch((error) => {
    console.error(error.message);
  });

const totalPrice = myBookstore.calculateTotalPrice();
console.log("Total Price: " + totalPrice);