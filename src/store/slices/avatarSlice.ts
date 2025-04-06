import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import i18n from '@/i18n';

// Funzione per ottenere i query parameters dall'URL
const getQueryParams = () => {
  if (typeof window === 'undefined') return {};
  
  const searchParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
  
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  
  return params;
};

// Define types for all the avataaars options
export type AvatarOptions = {
  // Basic options
  skinColor: string;
  hairColor: string;
  facialHairType: string;
  facialHairColor: string;
  topType: string;
  clotheType: string;
  clotheColor: string;
  eyeType: string;
  eyebrowType: string;
  mouthType: string;
  accessoriesType: string;
};

export interface AvatarState {
  options: AvatarOptions;
}

// Ottieni i parametri dalla query string
const queryParams = getQueryParams();

// Default avatar options
const defaultOptions = {
  skinColor: 'f2d3b1',
  hairColor: '2c1b18',
  facialHairType: 'Blank',
  facialHairColor: '2c1b18',
  topType: 'shortWaved',  // Aggiornato in base ai nuovi valori delle costanti
  clotheType: 'shirtCrewNeck',
  clotheColor: '3c4f5c',
  eyeType: 'default',
  eyebrowType: 'default',
  mouthType: 'default',
  accessoriesType: 'Blank',
};

// Funzione per recuperare le opzioni dell'avatar dal localStorage
const getSavedAvatarOptions = (): AvatarOptions => {
  if (typeof window === 'undefined') return defaultOptions;
  
  const savedOptions = localStorage.getItem('avatar-options');
  return savedOptions ? JSON.parse(savedOptions) : defaultOptions;
};

// Inizializza lo stato combinando valori di default, localStorage e query parameters
const initialState: AvatarState = {
  options: {
    ...defaultOptions,
    ...getSavedAvatarOptions(),
    ...queryParams,  // I query parameters hanno la precedenza
  },
};

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    updateAvatarOption: (
      state,
      action: PayloadAction<{ option: keyof AvatarOptions; value: string }>
    ) => {
      const { option, value } = action.payload;
      state.options[option] = value;
      
      // Salva le opzioni nel localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('avatar-options', JSON.stringify(state.options));
        
        // Aggiorna anche i query parameters
        const url = new URL(window.location.href);
        url.searchParams.set(option, value);
        
        // Preserva il parametro della lingua se presente
        const currentLanguage = url.searchParams.get('lng');
        if (currentLanguage) {
          url.searchParams.set('lng', currentLanguage);
        }
        
        window.history.replaceState({}, '', url.toString());
      }
    },
    resetAvatar: (state) => {
      // Resetta allo stato di default
      state.options = JSON.parse(JSON.stringify(defaultOptions));
      
      // Cancella le opzioni salvate nel localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('avatar-options');
        
        // Rimuovi tutti i query parameters relativi all'avatar
        const url = new URL(window.location.href);
        
        // Salva il parametro della lingua prima di resettare
        const currentLanguage = url.searchParams.get('lng');
        
        Object.keys(defaultOptions).forEach(key => {
          url.searchParams.delete(key);
        });
        
        // Ripristina il parametro della lingua se esisteva
        if (currentLanguage) {
          url.searchParams.set('lng', currentLanguage);
        }
        
        window.history.replaceState({}, '', url.toString());
      }
    },
    syncWithQueryParams: (state, action: PayloadAction<Record<string, string>>) => {
      // Aggiorna solo le opzioni presenti nei query parameters
      const queryParams = action.payload;
      
      // Estrai il parametro della lingua se presente
      const languageParam = queryParams['lng'];
      
      // Sincronizza le altre opzioni dell'avatar
      Object.keys(queryParams).forEach(key => {
        if (key in state.options) {
          (state.options as any)[key] = queryParams[key];
        }
      });
      
      // Aggiorna il localStorage per le opzioni dell'avatar
      if (typeof window !== 'undefined') {
        localStorage.setItem('avatar-options', JSON.stringify(state.options));
        
        // Se è presente il parametro della lingua, aggiorna anche i18next
        if (languageParam) {
          i18n.changeLanguage(languageParam);
        }
      }
    },
  },
});

export const { updateAvatarOption, resetAvatar, syncWithQueryParams } = avatarSlice.actions;

// Selectors
export const selectAvatarOptions = (state: RootState) => state.avatar.options;

export default avatarSlice.reducer;
