import React from "react";
import ReactDOM from "react-dom";
import internal from "stream";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";


function BookList(props) {
    const bookListItems = props.books.map((book, index: number) => {
        return (
            <div key={index} className="book-item">
                <h2>
                    {book.volumeInfo.title}
                </h2>
                <h3>
                    Author: {book.volumeInfo.authors.join(', ')}
                </h3>
                <Divider variant="middle" />
                <img src={book.volumeInfo.imageLinks.thumbnail}/>
                <Tooltip title={
                    book.volumeInfo.ratingsCount !== 1 ? (
                        `${book.volumeInfo.ratingsCount} ratings`
                    ) : (
                        `1 rating`
                    )}
                    placement="right"
                >
                    <span><Rating value={book.volumeInfo.averageRating} readOnly /></span>
                </Tooltip>
                {/* TODO: Add accordion to description*/}
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