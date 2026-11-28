import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';

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

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return [];
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    const handleToggle = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const addTodo = (text) => {
        setTodos((prevTodos) => [...prevTodos, { id: crypto.randomUUID(), text: text, completed: false }])
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 2 }}>
            <h1>Todos</h1>
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
                        )
                    })
                }
                <TodoForm onAdd={addTodo} />
            </List>
        </Box>
    )
}

