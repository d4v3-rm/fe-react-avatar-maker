import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { syncWithQueryParams } from '@/store/slices/avatarSlice';

/**
 * Hook per sincronizzare i query parameters con lo stato Redux
 * Analizza l'URL al caricamento della pagina e quando cambia
 * e aggiorna lo stato di Redux di conseguenza
 */
export const useQueryParamsSync = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // Estrai i parametri dalla query string
    const searchParams = new URLSearchParams(location.search);
    const params: Record<string, string> = {};
    
    // Converti i parametri in un oggetto
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    
    // Se ci sono parametri, sincronizza lo stato
    if (Object.keys(params).length > 0) {
      dispatch(syncWithQueryParams(params));
    }
  }, [location.search, dispatch]);
};

export default useQueryParamsSync;
