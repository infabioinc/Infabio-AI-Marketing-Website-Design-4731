import { apiClient } from './api';

class AuthService {
  async login(email, password) {
    try {
      const response = await apiClient.post('/auth/login', {
        email,
        password,
      });

      if (response.token) {
        apiClient.setAuthToken(response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      return {
        success: true,
        user: response.user,
        token: response.token,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async register(userData) {
    try {
      const response = await apiClient.post('/auth/register', userData);
      
      if (response.token) {
        apiClient.setAuthToken(response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      return {
        success: true,
        user: response.user,
        token: response.token,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async logout() {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      apiClient.clearAuthToken();
      localStorage.removeItem('user');
    }
  }

  async refreshToken() {
    try {
      const response = await apiClient.post('/auth/refresh');
      
      if (response.token) {
        apiClient.setAuthToken(response.token);
      }

      return response;
    } catch (error) {
      this.logout();
      throw error;
    }
  }

  async forgotPassword(email) {
    try {
      await apiClient.post('/auth/forgot-password', { email });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async resetPassword(token, password) {
    try {
      await apiClient.post('/auth/reset-password', {
        token,
        password,
      });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async verifyEmail(token) {
    try {
      await apiClient.post('/auth/verify-email', { token });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated() {
    return !!apiClient.token && !!this.getCurrentUser();
  }
}

export const authService = new AuthService();