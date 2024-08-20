import React from 'react';
import { List, ListItem, ListItemText, Checkbox, Divider } from '@mui/material';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <React.Fragment key={todo.id}>
          <ListItem
            button
            onClick={() => toggleComplete(todo.id)}
            style={{
              backgroundColor: todo.completed ? '#f0f0f0' : '#fff',
              borderRadius: '4px',
              marginBottom: '10px',
            }}
          >
            <Checkbox checked={todo.completed} />
            <ListItemText
              primary={todo.text}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            />
          </ListItem>
          {index < todos.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default TodoList;

