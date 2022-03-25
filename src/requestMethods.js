import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzkxMTFhZGQwYjY5NjA1MWQ2NGY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODE3MzUzOCwiZXhwIjoxNjQ4NDMyNzM4fQ.tW5hvcRATmKgMIgM1sUk1ECl8kNKlswE8D-P8KeWZwg';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const useRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
