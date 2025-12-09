import api from './index';

export const getClients = async () => {
  const response = await api.get('clients/');  // Assumindo endpoint /api/clients/
  return response.data;
};

export const getClientById = async (id: any) => {
  const response = await api.get(`clients/${id}/`);
  return response.data;
};

export const createClient = async (data: any) => {
  const response = await api.post('clients/', data);
  return response.data;
};

export const updateClient = async (id: any, data: any) => {
  const response = await api.put(`clients/${id}/`, data);
  return response.data;
};

export const deleteClient = async (id: any) => {
  await api.delete(`clients/${id}/`);
};