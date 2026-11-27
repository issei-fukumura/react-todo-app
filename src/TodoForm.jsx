import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function TodoForm() {
    const [text, setText] = useState('');

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    return (
        <ListItem>
            <form>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        },
                    }}
                />
                <button>登録する</button>
            </form>
        </ListItem>
    )
}