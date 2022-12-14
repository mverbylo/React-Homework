import axios from 'axios';

export const getTasks = async () =>
  axios.get('http://localhost:5000/api/tasks');

export const createTask = async () =>
  axios.post('http://localhost:5000/api/tasks');

export const deleteTask = async (id) =>
  axios.delete(`http://localhost:5000/api/tasks/${id}`);

export const updateTask = async (id) =>
  axios.put(`http://localhost:5000/api/tasks/${id}`);
