import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema, type ClientFormData } from "../../schemas/ClientsSchema";


interface ClientsFormProps {
  onSubmit: (data: ClientFormData) => void;
  loading?: boolean;
}

export default function ClientsForm({ onSubmit, loading }: ClientsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      is_active: true,
    },
  });

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium mb-1">Nome *</label>
        <input
          {...register("name")}
          className="w-full border rounded-md px-3 py-2"
        />
        {errors.name && (
          <p className="text-red-600 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          {...register("email")}
          type="email"
          className="w-full border rounded-md px-3 py-2"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Telefone</label>
        <input
          {...register("phone")}
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">CPF/CNPJ *</label>
        <input
          {...register("document")}
          className="w-full border rounded-md px-3 py-2"
        />
        {errors.document && (
          <p className="text-red-600 text-sm">{errors.document.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Endereço</label>
        <textarea
          {...register("address")}
          rows={3}
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("is_active")} />
        Ativo
      </label>

      <div className="flex justify-end gap-2">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
        >
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </form>
  );
}
