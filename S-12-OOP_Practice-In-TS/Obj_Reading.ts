interface Book {
    name: string;
    author: string;
    readingStatus: boolean;
}

const books: Book[] = [
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
];

books.forEach((book: Book): void => {
    console.log(book.name);
    console.log(book.author);
    console.log(book.readingStatus);
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-");
});