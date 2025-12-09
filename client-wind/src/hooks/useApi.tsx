import { useState, useCallback } from 'react';

type ApiFunction<T = any> = (...args: any[]) => Promise<T>;

export const useApi = <T = any,>(apiFunc: ApiFunction<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (...args: any[]) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunc(...args);
      setData(result);
      return result;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Erro desconhecido';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunc]);

  return { data, loading, error, execute };
};