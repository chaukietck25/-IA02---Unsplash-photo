import axios from 'axios';

const API_KEY = 'BMmqRt8U2EMyDR9ttZTm1PIsIVyKXmc9lcmXaG-6P90';
const BASE_URL = 'https://api.unsplash.com';

export const fetchPhotos = (page = 1) => {
  return axios.get(`${BASE_URL}/photos`, {
    params: {
      client_id: API_KEY,
      page,
      per_page: 10,
    },
  });
};

export const fetchPhotoById = (id) => {
  return axios.get(`${BASE_URL}/photos/${id}`, {
    params: {
      client_id: API_KEY,
    },
  });
};