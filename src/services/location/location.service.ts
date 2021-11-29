// @ts-ignore
import camelize from "camelize";

type LocationReq = {
  results: {
    geometry: {
      location: {
        lng: number;
        lat: number;
      };
      viewport: {
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
  }[];
};

export type LocationProps = {
  lat: number;
  lng: number;
  viewport: {
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

export const locationRequest = async (
  searchTerm: string
): Promise<LocationReq> => {
  return fetch(
    `http://localhost:5001/mealstogo-6e31e/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
  // const url = `${host}/geocode?city=${searchTerm}&mock=${isMock}`;
  // const res = await fetch(url);
  // return res.json();
};

export const locationTransform = (result: LocationReq): LocationProps => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
