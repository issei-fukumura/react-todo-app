import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Create } from '@mui/icons-material'


export default function TodoForm({onAdd}) {
    const [text, setText] = useState('');

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAdd(text)
        setText('')
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="新規追加"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label='create todo' edge="end" type="submit">
                                       <Create />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </form>
        </ListItem>
    )
}