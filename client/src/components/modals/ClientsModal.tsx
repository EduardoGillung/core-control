import ClientsForm from "../forms/ClientsForm";

interface ClientModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  loading?: boolean;
}

export function ClientModal({ open, onClose, onSubmit, loading }: ClientModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 animate-[fadeIn_0.2s]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Novo Cliente</h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        </div>
        {/* Form */}
        <ClientsForm onSubmit={onSubmit} loading={loading} />
      </div>
    </div>
  );
}
