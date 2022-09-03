import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import Ratings from "./Ratings";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function BookList(props: any) {
    const bookListItems = props.books.map((book: any, index: number) => {
        return (
            <Paper
                key={index}
                elevation={2}
                sx={{p: 5}}
            >
                <Typography variant="h5" sx={{fontWeight: "bold"}}>
                    {book.volumeInfo.title}
                </Typography>
                <Typography variant="h6">
                    Author: {book.volumeInfo.authors.join(', ')}
                </Typography>
                <Ratings
                    ratingsCount={book.volumeInfo.ratingsCount}
                    averageRating={book.volumeInfo.averageRating}
                />
                <Divider />
                <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    className="book-image"
                />
                
                <Accordion elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    />
                    <AccordionDetails>
                        <Typography sx={{textAlign: "justify"}}>
                            {book.volumeInfo.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        );
    });

    return (
        <Stack
            spacing={5}
            sx={{py: 5}}
        >
            {bookListItems}
        </Stack>
    )
}

export default BookList;