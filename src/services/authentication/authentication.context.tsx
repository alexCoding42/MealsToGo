import React, { useState, createContext } from "react";

import { loginRequest } from "./authentication.service";

interface AuthenticationContext {}

type AuthenticationContextProviderProps = {
  children: React.ReactNode;
};

export const AuthenticationContext = createContext<AuthenticationContext>({});

export const AuthenticationContextProvider = ({
  children,
}: AuthenticationContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
