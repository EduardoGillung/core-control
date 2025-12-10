import { useState, useEffect } from 'react';
import { clientsService } from '../services/clientsService';
import { useApi } from '../hooks/useApi';
import { ClientModal } from '../components/modals/ClientsModal';



interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  is_active: boolean;
}

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const { loading, error, execute } = useApi(clientsService.getAll);


  const [openModal, setOpenModal] = useState(false);
  const { execute: createClient, loading: loadingCreate } = useApi(clientsService.create);


  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      const data = await execute();
      setClients(data.results || data);
    } catch (err) {
      console.error('Erro ao carregar clientes:', err);
    }
  };

  
  const handleCreate = async (data: any) => {
  try {
    const newClient = await createClient(data);

    setClients(prev => [newClient, ...prev]);
    setOpenModal(false);
  } catch (err) {
    alert("Erro ao criar cliente");
  }
};

  const handleDelete = async (id: number) => {
    if (!window.confirm('Deseja realmente excluir este cliente?')) return;
    
    try {
      await clientsService.delete(id);
      setClients(clients.filter(client => client.id !== id));
    } catch (err) {
      alert('Erro ao excluir cliente');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          <p className="font-semibold">Erro ao carregar clientes</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
            <button
              onClick={() => setOpenModal(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-blue-700"
            >
              Novo Cliente
            </button>
        </div>

        {clients.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <svg className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-gray-600">Nenhum cliente cadastrado</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Telefone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{client.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{client.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{client.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        client.is_active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {client.is_active ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">
                        Editar
                      </button>
                      <button 
                        onClick={() => handleDelete(client.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
        <ClientModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleCreate}
        loading={loadingCreate}
      />
    </div>
    
  );
}