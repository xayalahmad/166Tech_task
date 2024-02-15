import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {
    const [lang, setLang] = React.useState(false);

    const handleChange = () => {
        setLang(true);
    };

    return (
        <div >
            <FormControl sx={{  minWidth: 68 }}>
                {lang ? '' : <InputLabel>AZ</InputLabel>}
                <Select sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                        border: 0,
                    },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                        border: 0,
                    },
                }}
                    id="demo-simple-select-autowidth"
                    onChange={handleChange}
                    autoWidth
                    label="language"
                >

                    <MenuItem value={10}>AZ</MenuItem>
                    <MenuItem value={21}>EN</MenuItem>
                    <MenuItem value={22}>RU</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}