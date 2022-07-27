import React from "react";
import ReactDOM from "react-dom";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import Ratings from "./Ratings";


function BookList(props: any) {
    const bookListItems = props.books.map((book: any, index: number) => {
        return (
            <Paper key={index} className="book-item" elevation={2}>
                <h2>
                    {book.volumeInfo.title}
                </h2>
                <h3>
                    Author: {book.volumeInfo.authors.join(', ')}
                </h3>
                <Ratings
                    ratingsCount={book.volumeInfo.ratingsCount}
                    averageRating={book.volumeInfo.averageRating}
                />
                <Divider />
                <img src={book.volumeInfo.imageLinks.thumbnail}/>
                {/* TODO: Add accordion to description*/}
                <p>
                    {book.volumeInfo.description}
                </p>
            </Paper>
        );
    });

    return (
        <Stack spacing={5} className="book-list">
            {bookListItems}
        </Stack>
    )
}

export default BookList;