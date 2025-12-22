import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  } | null;
  token: string | null; 
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: { id: string; name: string; email: string; role: string };
        token: string | null; // ✅ NULLABLE BANAYA
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;

      if (typeof window !== 'undefined') {
        // ✅ Token optional hai ab
        if (action.payload.token) {
          localStorage.setItem('token', action.payload.token);
        }
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      }
      // ❌ Cookie middleware handle kar raha hai, yahan set karne ki zaroorat nahi
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;

      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
      
      // ✅ Logout API call karke cookie delete karo
      fetch('/api/auth/logout', { 
        method: 'POST',
        credentials: 'include' 
      }).catch(console.error);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    loadFromStorage: (state) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        const userStr = localStorage.getItem('user');

        if (userStr) {
          try {
            state.user = JSON.parse(userStr);
            state.token = token;
            state.isAuthenticated = true;
          } catch (error) {
            console.error('Error loading from storage:', error);
          }
        }
      }
    },
  },
});

export const { setCredentials, logout, setLoading, loadFromStorage } = authSlice.actions;
export default authSlice.reducer;