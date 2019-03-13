import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeContainer from "./../screens/home/HomeContainer";
import LoginContainer from "../screens/login/LoginContainer";

const AppNavigator = createStackNavigator({
  Login: { screen: LoginContainer },
  Home: { screen: HomeContainer }
});

export default AppNavigator;
