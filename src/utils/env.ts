import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-6e31e.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-6e31e/us-central1";

export const isAndroid = Platform.OS === "android";
// export const isDevelopment = process.env.NODE_ENV === "development";
export const isDevelopment = false;

// export const isMock = true;
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
