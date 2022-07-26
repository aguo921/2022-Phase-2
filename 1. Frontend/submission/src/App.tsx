import axios from "axios";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import BookList from './BookList';
import Filter from "./Filter";
import './App.css';

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchInfo, setSearchInfo] = useState<any>(undefined);

  const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1"

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4} className="heading">
          <h1>Library</h1>
        </Grid>
        <Grid item xs={2} className="heading">
        <Filter />
        </Grid>
        <Grid item xs={5} className="heading">
          <TextField
            id="search-bar"
            className="text"
            value={searchName}
            onChange={(prop: any) => {
              setSearchName(prop.target.value);
            }}
            label="Enter a book name..."
            variant="filled"
            placeholder="Search..."
            size="small"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={1} className="heading">
          <div>
            <IconButton
              aria-label="search"
              onClick={() => {
                search();
              }}
            >
              <SearchIcon style={{fill: "blue"}} />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      {/* TODO: Add search filters */}
      {searchInfo === undefined ? (
        <p>Book not found</p>
      ) : (
        <BookList books={searchInfo.items} />
      )}
    </div>
  );

  function search() {
    axios
    .get(GOOGLE_BOOKS_BASE_URL + "/volumes?q=" + searchName.split(" ").join("+"))
    .then((res) => {
      setSearchInfo(res.data);
    })
    .catch((err) => {
      console.log("Book not found");
      setSearchInfo(undefined);
    });
  }
}

export default App;
