import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks'; // The base URL for your backend API

const TaskService = {
  // Fetch all tasks
  getTasks: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  // Add a new task
  addTask: async (task) => {
    try {
      const response = await axios.post(API_URL, task);
      return response.data;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  // Update an existing task
  updateTask: async (task) => {
    try {
      const response = await axios.put(`${API_URL}/${task.id}`, task);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  // Delete a task
  deleteTask: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },
};

export default TaskService;
