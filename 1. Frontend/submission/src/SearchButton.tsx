import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchButton(props: {search: (a: void) => void}) {
    return (
        <div>
            <IconButton
                aria-label="search"
                onClick={() => {
                    props.search();
                }}
                sx={{mr: 2}}
            >
                <SearchIcon
                    style={{fill: "white"}}
                />
            </IconButton>
        </div>
    )
}

export default SearchButton;