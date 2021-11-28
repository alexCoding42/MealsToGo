// @ts-ignore
import camelize from "camelize";
import { ILocation } from "../../interfaces";

export const locationRequest = (searchTerm: string) => {};

export const locationTransform = (result: ILocation | unknown) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
