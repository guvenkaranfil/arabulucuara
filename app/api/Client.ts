import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.arabulucuara.com',
});

export default client;
