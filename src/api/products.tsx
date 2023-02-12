import client from './client';

export const getProductsApi = () => client.get(`products`);