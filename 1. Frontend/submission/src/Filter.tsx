import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Filter(props: {searchBy: string | undefined, setFilter: (a: string | undefined) => void}) {
    return (
        <FormControl variant="filled" size="small" fullWidth>
            <InputLabel id="filter-label">Search by...</InputLabel>
            <Select
                labelId="filter-label"
                value={props.searchBy}
                label="Age"
                onChange={(event: SelectChangeEvent) => {
                    props.setFilter(event.target.value);
                }}
            >
                <MenuItem value={"any"}>Any</MenuItem>
                <MenuItem value={"intitle"}>Title</MenuItem>
                <MenuItem value={"inauthor"}>Author</MenuItem>
                <MenuItem value={"inpublisher"}>Publisher</MenuItem>
            </Select>
        </FormControl>
    )
}

export default Filter