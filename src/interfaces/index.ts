export interface IRestaurant {
  name?: string;
  icon?: string;
  photos?: string[];
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
}

export interface ILocation {
  [key: string]: {
    results: [
      {
        geometry: {
          location: {
            lng: number;
            lat: number;
          };
          viewport?: {
            northeast: {
              lat: number;
              lng: number;
            };
            southwest: {
              lat: number;
              lng: number;
            };
          };
        };
      }
    ];
  };
}
