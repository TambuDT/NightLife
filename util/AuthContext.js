import React, { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig";

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [errore, setError] = useState("");

  useEffect(() => {
    // Al montaggio del componente, verifica lo stato di autenticazione
    checkUserStatus();
  }, []);

  const loginUser = async (email, password) => {
    try {
      // Chiamata per effettuare il login utilizzando l'oggetto account dalla configurazione
      const response = await account.createEmailSession(email, password);
      setUser(response);
      setLoading(false);
      setError("");
    } catch (error) {
      console.error("Errore durante il login:", error);
      setError(error);
    }
  };

  const logoutUser = async () => {
    try {
      // Chiamata per effettuare il logout utilizzando l'oggetto account dalla configurazione
      await account.deleteSession("current");
      setUser(null);
      setLoading(false);
    } catch (error) {
      console.error("Errore durante il logout:", error);
      setError(error);
    }
  };

  const registerUser = async (email, password) => {
    try {
      // Chiamata per registrare un nuovo utente utilizzando l'oggetto account dalla configurazione
      const response = await account.create(email, password);
      setUser(response);
      setLoading(false);
    } catch (error) {
      console.error("Errore durante la registrazione:", error);
      setError(error);
    }
  };

  const checkUserStatus = async () => {
    try {
      // Chiamata per ottenere lo stato dell'utente corrente utilizzando l'oggetto account dalla configurazione
      const response = await account.get();
      setUser(response);
      setLoading(false);
    } catch (error) {
      console.error("Nessun utente autenticato:", error);
      setError(error);
      setLoading(false);
    }
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
    errore,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Caricamento...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
