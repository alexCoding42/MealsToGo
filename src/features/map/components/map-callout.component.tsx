import React from "react";
import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info.component";
import { RestaurantProps } from "../../../services/restaurants/types";

type MapCallout = {
  restaurant: RestaurantProps;
};

const MapCallout = ({ restaurant }: MapCallout) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);

export default MapCallout;
