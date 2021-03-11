import { Dimensions } from "react-native";

export const trimText = (text = "", limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const numberComma = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const screenScale = () => {
  return Dimensions.get("window");
};
