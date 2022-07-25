import React from "react";
import ReactDOM from "react-dom";
import internal from "stream";

function BookList(props) {
    const bookListItems = props.books.map((book, index: number) => {
        return (
            <div key={index}>
                <h2>
                    <a href={book.volumeInfo.previewLink}>
                        {book.volumeInfo.title}
                    </a>
                </h2>
                <h3>
                    Author: {book.volumeInfo.authors.join(', ')}
                </h3>
                <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
                <p>
                    {book.volumeInfo.description}
                </p>
            </div>
        );
    });

    return (
        <div>
            {bookListItems}
        </div>
    )
}

export default BookList;