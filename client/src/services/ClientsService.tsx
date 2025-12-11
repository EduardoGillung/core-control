import api from './Api';

export const clientsService = {
  getAll: async (params = {}) => {
    const response = await api.get('/clients/', { params });
    return response.data;
  },

  getById: async (id: any) => {
    const response = await api.get(`/clients/${id}/`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/clients/', data);
    return response.data;
  },

  update: async (id: any, data: any) => {
    const response = await api.put(`/clients/${id}/`, data);
    return response.data;
  },

  partialUpdate: async (id: any, data: any) => {
    const response = await api.patch(`/clients/${id}/`, data);
    return response.data;
  },

  delete: async (id: any) => {
    const response = await api.delete(`/clients/${id}/`);
    return response.data;
  },

  getActive: async () => {
    const response = await api.get('/clients/active/');
    return response.data;
  },
};
