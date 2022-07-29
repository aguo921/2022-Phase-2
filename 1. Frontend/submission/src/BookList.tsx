import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
                <Accordion elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    />
                    <AccordionDetails>
                        <p>
                            {book.volumeInfo.description}
                        </p>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        );
    });

    return (
        <Stack
            spacing={5}
            className="book-list"
        >
            {bookListItems}
        </Stack>
    )
}

export default BookList;