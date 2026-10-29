import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getToken,
  clearToken,
  loginCustomer,
  registerCustomer,
  getSessionUser,
  updateCustomerProfile,
  getCachedUser,
} from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getCachedUser);
  const [token, setTokenState] = useState(getToken);
  const [isLoading, setIsLoading] = useState(true);

  // Validate session on mount
  useEffect(() => {
    let mounted = true;
    async function initAuth() {
      const savedToken = getToken();
      if (!savedToken) {
        if (mounted) setIsLoading(false);
        return;
      }

      try {
        const currentUser = await getSessionUser();
        if (mounted) {
          if (currentUser) {
            setUser(currentUser);
            setTokenState(savedToken);
          } else {
            setUser(null);
            setTokenState(null);
          }
        }
      } catch (err) {
        console.warn('[AuthProvider] Session validation error:', err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    initAuth();
    return () => {
      mounted = false;
    };
  }, []);

  const login = async (email, password, rememberMe = true) => {
    const res = await loginCustomer(email, password, rememberMe);
    setUser(res.user);
    setTokenState(res.token);
    return res;
  };

  const register = async (payload) => {
    const res = await registerCustomer(payload);
    setUser(res.user);
    setTokenState(res.token);
    return res;
  };

  const logout = () => {
    clearToken();
    setUser(null);
    setTokenState(null);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/login');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const refreshUser = async () => {
    const fresh = await getSessionUser();
    if (fresh) setUser(fresh);
    return fresh;
  };

  const updateProfile = async (profileData) => {
    const updated = await updateCustomerProfile(profileData);
    setUser(updated);
    return updated;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user && !!token,
        isLoading,
        login,
        register,
        logout,
        refreshUser,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
