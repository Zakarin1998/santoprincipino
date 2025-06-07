import axios from 'axios';

// Define API base URL
const API_URL = 'http://localhost:3030/api';

// Create an apiClient to handle API requests
export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});