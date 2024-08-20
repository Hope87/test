import React, { useState } from 'react';
import { Container, Tabs, Tab, Paper } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = (task: string) => {
    const newTodo: Todo = { id: Date.now(), text: task, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          width: '100%',
          maxWidth: '500px',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>Todo App</h1>
        <TodoForm addTask={addTask} />
        <Tabs
          value={filter}
          onChange={(_, newValue) => setFilter(newValue)}
          aria-label="filter tabs"
          centered
        >
          <Tab label="All" value="all" />
          <Tab label="Active" value="active" />
          <Tab label="Completed" value="completed" />
        </Tabs>
        <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
      </Paper>
    </Container>
  );
};

export default App;



