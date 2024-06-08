class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }
  land() {
    if (this.isAvailable) {
      this.isAvailable = false;
    } else {
      console.log("This book is not available");
    }
  }
  return() {
    this.isAvailable = true;
  }
}

class Author {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBooks(book) {
    this.books.push(book);
  }
}

class Member {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }
  borrowedBook(book) {
    book.lend();
    this.borrowedBooks.push(book);
  }
  returnBook(book) {
    this.borrowedBooks = this.borrowedBooks.filter(
      (borrowedBook) => borrowedBook.isbn !== book.isbn
    );
    book.return();
  }
}

class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log("Book added");
  }

  addMember(member) {
    this.members.push(member);
    console.log("Member added");
  }

  findBookByTitle(title) {
    this.books.find((book) => book.title === title);
  }

  findBooksByAuthor(author) {
    this.books.filter((bookLibrary) => bookLibrary.author.name === author);
  }

  lendBook(book, member) {
    if (book.isAvailable) {
      member.borrowedBook(book);
    } else {
      console.log("Book is not available !");
    }
  }

  returnBook(book, member) {
    member.returnBook(book);
    book.return();
  }
}

const author1 = new Author("Author1");
const author2 = new Author("Author2");

const book1 = new Book("Title1", author1, 63);
const book2 = new Book("Title2", author2, 73);
const book3 = new Book("Title3", author2, 91);

const member = new Member("Member");
const library = new Library("Libray");

library.addBook(book1);
library.addBook(book2);
library.addBook(book2);
library.addMember(member);
library.findBookByTitle("Title1");
library.findBooksByAuthor(author2.name);
library.lendBook(book1, member);