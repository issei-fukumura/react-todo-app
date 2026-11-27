import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CommentIcon from '@mui/icons-material/Comment';

const initialTodos = [
    { id: 1, text: '犬の散歩', completed: false },
    { id: 2, text: '猫の散歩', completed: false },
    { id: 3, text: '豚の散歩', completed: true },
    { id: 4, text: '牛の散歩', completed: false }
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos)

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    const handleToggle = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onDelete={handleDelete} 
                            onToggle={handleToggle} 
                        />
                    )})
            }
        <TodoForm />
        </List>
    )
}

