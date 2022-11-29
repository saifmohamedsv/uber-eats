import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./screens/Home";

// const nav = createStackNavigator(
//   {
//     Home,
//   },
//   { initialRouteName: "Home" }
// );

// export default createAppContainer(nav);

export default function () {
  return <Home />;
}
