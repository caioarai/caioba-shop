import React, { useContext } from 'react';
import { createContext, useState } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dummyjson.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Usuário ou senha incorretos');
      }

      const data = await response.json();
      setUser(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <UserContext.Provider value={{ user, login, loading, error, clearError }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
