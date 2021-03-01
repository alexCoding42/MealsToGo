import React, { createContext, useState } from 'react';

import { locationRequest, locationTransform } from './location.service';

interface LocationContext {
  location?: string;
  keyword?: string;
  isLoading?: boolean;
  error?: string;
}

type LocationContextProviderProps = {
  children: React.ReactNode;
};

export const LocationContext = createContext<LocationContext>({});

export const LocationContextProvider = ({
  children,
}: LocationContextProviderProps) => {
  const [keyword, setKeyword] = useState<string>('San Francisco');
  const [location, setLocation] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSearch = (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      // don't do anything
      return;
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
