const books = [
  {
      name: "The Alchemist",
      author: "Paulo Coelho",
      readingStatus: true
  },
  {
      name: "Atomic Habits",
      author: "James Clear",
      readingStatus: false
  },
  {
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      readingStatus: true
  }
]

books.forEach((books) => {
  console.log(books.name);
  console.log(books.author);
  console.log(books.readingStatus);
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-");
})