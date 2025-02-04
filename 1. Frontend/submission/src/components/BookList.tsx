// import material UI components
import Stack from "@mui/material/Stack";

// import components
import BookItem from "./BookItem";

// import fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import interfaces
import { Book } from '../interfaces';

type Props = {
    books: Book[]
}

function BookList(props: Props) {
    return (
        <Stack
        spacing={5}
        sx={{py: 5}}
    >
        {props.books.map((book: any) => (
            <BookItem {...book} />
        ))}
    </Stack>
    )
}

export default BookList;