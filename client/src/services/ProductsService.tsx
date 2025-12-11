import api from './Api';

export const productsService = {
  getAll: async (params = {}) => {
    const response = await api.get('/products/', { params });
    return response.data;
  },

  getById: async (id: any) => {
    const response = await api.get(`/products/${id}/`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/products/', data);
    return response.data;
  },

  update: async (id: any, data: any) => {
    const response = await api.put(`/products/${id}/`, data);
    return response.data;
  },

  partialUpdate: async (id: any, data: any) => {
    const response = await api.patch(`/products/${id}/`, data);
    return response.data;
  },

  delete: async (id: any) => {
    const response = await api.delete(`/products/${id}/`);
    return response.data;
  },

  getLowStock: async () => {
    const response = await api.get('/products/low_stock/');
    return response.data;
  },
};