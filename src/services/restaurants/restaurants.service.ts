// @ts-ignore
import camelize from "camelize";
import { MockProps, RestaurantProps } from "./types";

export const restaurantsRequest = async (
  location: string
): Promise<MockProps> => {
  return fetch(
    `http://localhost:5001/mealstogo-6e31e/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
  // const url = `${host}/placesNearby?location=${location}&mock=${isMock}`;
  // const res = await fetch(url);
  // return res.json();
};
export const restaurantsTransform = ({
  results = [],
}: MockProps): Array<RestaurantProps> => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
