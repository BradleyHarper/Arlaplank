class Book {
    title;
    author;
    description;
    coverImageUrl;

    constructor(title, author, description = null, coverImageUrl = null) {
        // Required parameters
        this.title = title;
        this.author = author;

        // Optional parameters
        this.description = description;
        this.coverImageUrl = coverImageUrl;
    }
}

const books = [];

function setupBooks() {
    const youDontKnowJS = new Book(
        'You don\'t know JS',
        'Kyle Simpson',
        'This is a series of books diving deep into the core mechanisms of the JavaScript language.',
        './img/you-dont-know-js.webp'
    );

    books.push(youDontKnowJS);
    books.push(new Book('aksdfj', 'asdfasdf'));
}

function render() {
    setupBooks();

    const parentElement = document.getElementById('main-book-display');
    const template = document.getElementById('book-template');

    if(books.length > 0) {
        books.forEach(book => {
            console.log( 'book', book );
            const bookElement = template.content.cloneNode(true);
            parentElement.appendChild(bookElement);
        });
    }
}

render();
