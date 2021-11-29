// @ts-ignore
import camelize from "camelize";
import { host } from "../../utils/env";

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
  const url = `${host}/geocode?city=${searchTerm}`;
  const res = await fetch(url);
  return res.json();
};

export const locationTransform = (result: LocationReq): LocationProps => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
