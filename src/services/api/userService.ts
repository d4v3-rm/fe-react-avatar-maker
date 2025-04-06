import apiClient from './apiClient';

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
}

export const userService = {
  // Login user
  login: async (data: LoginRequest): Promise<User> => {
    const response = await apiClient.post<User>('/auth/login', data);
    return response.data;
  },
  
  // Register new user
  register: async (data: RegisterRequest): Promise<User> => {
    const response = await apiClient.post<User>('/auth/register', data);
    return response.data;
  },
  
  // Get current user profile
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<User>('/users/me');
    return response.data;
  },
  
  // Update user profile
  updateProfile: async (data: Partial<User>): Promise<User> => {
    const response = await apiClient.put<User>('/users/me', data);
    return response.data;
  },
  
  // Logout user
  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
  },
};

export default userService;
