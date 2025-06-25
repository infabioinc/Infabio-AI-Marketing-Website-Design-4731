import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data - in production, this would come from your backend
  const mockUsers = {
    'admin@infabio.com': {
      id: 'user_1',
      email: 'admin@infabio.com',
      name: 'Sarah Chen',
      role: 'admin',
      permissions: ['all'],
      department: 'executive',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    'manager@infabio.com': {
      id: 'user_2',
      email: 'manager@infabio.com',
      name: 'Michael Rodriguez',
      role: 'manager',
      permissions: ['view_analytics', 'manage_campaigns', 'view_clients', 'manage_team'],
      department: 'marketing',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    'analyst@infabio.com': {
      id: 'user_3',
      email: 'analyst@infabio.com',
      name: 'Priya Sharma',
      role: 'analyst',
      permissions: ['view_analytics', 'create_reports', 'view_clients'],
      department: 'analytics',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    'client@infabio.com': {
      id: 'user_4',
      email: 'client@infabio.com',
      name: 'David Kim',
      role: 'client',
      permissions: ['view_own_data', 'view_reports'],
      department: 'client',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  };

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('infabio_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Mock authentication - in production, this would be an API call
      if (mockUsers[email]) {
        const userData = mockUsers[email];
        setUser(userData);
        localStorage.setItem('infabio_user', JSON.stringify(userData));
        return { success: true, user: userData };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('infabio_user');
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    if (user.permissions.includes('all')) return true;
    return user.permissions.includes(permission);
  };

  const hasRole = (role) => {
    if (!user) return false;
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    return user.role === role;
  };

  const value = {
    user,
    login,
    logout,
    hasPermission,
    hasRole,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};