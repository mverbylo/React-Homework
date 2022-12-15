import axios from 'axios';
const URL = 'http://localhost:5000/api/tasks';
export const getTasks = async () => axios.get(URL);

export const createTask = async (taskData) => axios.post(URL, taskData);

export const deleteTask = async (id) => axios.delete(`${URL}/${id}`);

export const updateTask = async (taskData) =>
  axios.put(`${URL}/${taskData.id}`, taskData);
