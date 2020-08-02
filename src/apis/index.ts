import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Product } from '../types';

const baseURL = window.location.hostname.includes('github.io')
  ? '/ReactList'
  : '/';

const api: AxiosInstance = axios.create({
  baseURL,
});

export const fetchProducts = async (): Promise<AxiosResponse<Product[]>> => {
  return await api.get('/products.json');
};
