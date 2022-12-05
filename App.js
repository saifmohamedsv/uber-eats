import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import OrderCompleted from "./screens/OrderCompleted";
import { Provider } from "react-redux";
import configureStore from "./redux";

const Navigation = createStackNavigator(
  {
    Home,
    Restaurant,
    OrderCompleted,
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
  }
);

const App = createAppContainer(Navigation);

const store = configureStore();

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
