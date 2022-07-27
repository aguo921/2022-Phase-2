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
            >
                <SearchIcon
                    style={{fill: "blue"}}
                />
            </IconButton>
        </div>
    )
}

export default SearchButton;