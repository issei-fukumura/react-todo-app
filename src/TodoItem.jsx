import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({ todo, onDelete ,onToggle}) {
    const labelId = todo.id;
    const labelValue = todo.text;
    const isCompleted = todo.completed
    const SelectionIcon = isCompleted ? CheckBoxIcon : CheckBoxOutlineBlankIcon;

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label={`see comments for ${labelValue}`} onClick={() => onDelete(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton
                role="checkbox"
                aria-checked={isCompleted}
                aria-labelledby={labelId}
                // onClick={handleToggle(value)}
                onClick={() => {onToggle(todo.id)}}
                dense
            >
                <ListItemIcon>
                    <SelectionIcon
                        sx={{
                            color: isCompleted ? 'primary.main' : 'text.secondary',
                            padding: '9px',
                            marginLeft: '-12px',
                            boxSizing: 'content-box',
                        }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={labelValue} />
            </ListItemButton>
        </ListItem>
    )
}