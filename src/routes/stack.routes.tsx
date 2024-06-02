import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";
import { Initial } from "../screens/Initial/initial.screen";

const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Initial: undefined;
  TabDashboard: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Initial"
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
          component={Initial}
        />

        <Stack.Screen
          name="TabDashboard"
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
          component={TabRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
