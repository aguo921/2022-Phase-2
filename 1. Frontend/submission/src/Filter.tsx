import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";


function Filter() {
    const [searchBy, setSearchBy] = useState<undefined | string>(undefined)

    return (
        <FormControl variant="filled" size="small" fullWidth>
            <InputLabel id="filter-label">Search by...</InputLabel>
            <Select
                labelId="filter-label"
                value={searchBy}
                label="Age"
                onChange={(event: SelectChangeEvent) => {
                    setSearchBy(event.target.value);
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