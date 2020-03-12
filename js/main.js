class Book {
    title;
    author;
    description;
    coverImageUrl;
    slug;

    constructor(title, author, description = null, coverImageUrl = null) {
        // Required parameters
        this.title = title;
        this.author = author;

        // Optional parameters
        this.description = description;
        this.coverImageUrl = coverImageUrl;
        this.slug = this.slugify(this.title);
    }

    // Slugify a string
    slugify(str)
    {
        str = str.replace(/^\s+|\s+$/g, '');

        // Make the string lowercase
        str = str.toLowerCase();

        // Remove accents, swap ñ for n, etc
        var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
        var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        // Remove invalid chars
        str = str.replace(/[^a-z0-9 -]/g, '')
            // Collapse whitespace and replace by -
            .replace(/\s+/g, '-')
            // Collapse dashes
            .replace(/-+/g, '-');

        return str;
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
}

function setupSidebar()
{
    const titles = books.map(book => {
        return {
            title: book.title,
            slug: book.slug
        };
    });


}

function render() {

    setupBooks();
    setupSidebar();

    const parentElement = document.getElementById('main-book-display');
    const template = document.getElementById('book-template');

    if(books.length > 0) {
        books.forEach(book => {
            const bookElement = template.content.cloneNode(true);
            bookElement.getElementById('title-span').textContent = book.title;
            bookElement.getElementById('description-span').textContent = book.description;
            parentElement.appendChild(bookElement);
        });
    }
}

render();
