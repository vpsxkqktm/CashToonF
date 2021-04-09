import { Dimensions, useWindowDimensions } from "react-native";

const { width, height } = Dimensions.get("window");
// const { width, height } = useWindowDimensions();

export default { width, height };
