import TextField from "@mui/material/TextField";

function SearchBar(props: {value: string, setValue: (a: string) => void}) {
    return (
        <TextField
            id="search-bar"
            className="text"
            value={props.value}
            onChange={(prop: any) => {
                props.setValue(prop.target.value);
            }}
            label="Search the library..."
            variant="filled"
            placeholder="Search..."
            size="small"
            sx={{
                mr: 2,
                minWidth: 0.3,
                flexGrow: 1,
                bgcolor: "white",
            }}
        />
    )
}

export default SearchBar;