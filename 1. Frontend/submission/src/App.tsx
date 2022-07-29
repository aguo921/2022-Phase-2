import axios from "axios";
import {useState} from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BookList from './BookList';
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import './App.css';

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchInfo, setSearchInfo] = useState<any>(undefined);
  const [searchBy, setSearchBy] = useState("any");

  const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1"

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4} className="heading">
          <h1>Library</h1>
        </Grid>
        <Grid item xs={2} className="heading">
          <Filter
            searchBy={searchBy}
            setSearchBy={setSearchBy}
          />
        </Grid>
        {/*TODO: Fix alignment of filter and search bar*/}
        <Grid item xs={5} className="heading">
          <SearchBar
            value={searchName}
            setValue={setSearchName}
          />
        </Grid>
        <Grid item xs={1} className="heading">
          <SearchButton
            search={search}
          />
        </Grid>
      </Grid>
      <Container maxWidth="sm">
        {searchInfo === undefined ? (
          <p>Book not found</p>
        ) : (
          <BookList books={searchInfo.items} />
        )}
      </Container>
    </div>
  );

  function search() {
    let query = searchName.split(" ").join("+");
    if (searchBy !== "any") {
      query = searchBy + ":" + query;
    }
    axios
    .get(GOOGLE_BOOKS_BASE_URL + "/volumes?q=" + query)
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
