import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Filter(props: {searchBy: string, setSearchBy: (a: string) => void}) {
    return (
        <FormControl
            variant="filled"
            size="small"
            sx={{
                mr: 2,
                minWidth: 0.15,
                flexGrow: 0.5,
                bgcolor: "white"
            }}
        >
            <InputLabel id="filter-label">
                Search by...
            </InputLabel>
            <Select
                labelId="filter-label"
                value={props.searchBy}
                label="Age"
                onChange={(event: SelectChangeEvent) => {
                    props.setSearchBy(event.target.value);
                }}
            >
                <MenuItem value={"any"}>
                    Any
                </MenuItem>
                <MenuItem value={"intitle"}>
                    Title
                </MenuItem>
                <MenuItem value={"inauthor"}>
                    Author
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default Filter