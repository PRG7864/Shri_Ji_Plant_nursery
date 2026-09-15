import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('verdora_token');
      if (token) {
        try {
          const profile = await api.getMe();
          setUser(profile);
        } catch (error) {
          console.error('Session expired:', error.message);
          localStorage.removeItem('verdora_token');
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    const data = await api.login({ email, password });
    localStorage.setItem('verdora_token', data.token);
    setUser(data);
    return data;
  };

  const register = async (userData) => {
    const data = await api.register(userData);
    localStorage.setItem('verdora_token', data.token);
    setUser(data);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('verdora_token');
    setUser(null);
  };

  const updateProfile = async (updates) => {
    const updated = await api.updateProfile(updates);
    setUser(prev => ({ ...prev, ...updated }));
    return updated;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
