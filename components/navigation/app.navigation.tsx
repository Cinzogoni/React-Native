import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../review/HomeScreen";
import DetailScreen from "../review/DetailScreen";
import AboutScreen from "../review/AboutScreen";
import AppHeader from "./app.header";
import { Fragment } from "react";

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => <AppHeader /> }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Chi Tiết" }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeLayout"
        component={HomeLayout}
        options={{ title: "Trang Chủ", header: () => <Fragment /> }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "Thông Tin", header: () => <AppHeader /> }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
