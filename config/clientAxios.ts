import axios from 'axios';

export const clientAxios = axios.create({
  baseURL: 'https://geo.ipify.org/api/v2',
  params: {
    apiKey: process.env.NEXT_PUBLIC_IP_GEO_API_KEY,
  },
});
