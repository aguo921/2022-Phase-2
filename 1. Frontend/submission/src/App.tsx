import axios from "axios";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import BookList from './BookList';
import './App.css';

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchInfo, setSearchInfo] = useState<any>(undefined);

  const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1"

  return (
    <div>
      <h1>Book Search</h1>

      <div>
        <TextField
          id="search-bar"
          className="text"
          value={searchName}
          onChange={(prop: any) => {
            setSearchName(prop.target.value);
          }}
          label="Enter a book name..."
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton
          aria-label="search"
          onClick={() => {
            search();
          }}
        >
          <SearchIcon style={{fill: "blue"}} />
        </IconButton>
      </div>

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
