import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface TodoFormProps {
  addTask: (task: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '10px' }}
      >
        Add Task
      </Button>
    </form>
  );
};

export default TodoForm;


