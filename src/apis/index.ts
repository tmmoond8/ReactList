import axios from 'axios';

export const fetchProducts = async () => {
  return await axios.get('/products.json');
};
