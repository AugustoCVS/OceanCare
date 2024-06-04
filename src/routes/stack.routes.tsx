import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";
import { Initial } from "../screens/Initial/initial.screen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setToken } from "@/redux/slices/Token/token.slice";
import { getToken } from "@/utils/auth";

const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Initial: undefined;
  TabDashboard: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.token.token);

  const handleGetUserTokenFromStorage = async () => {
    const res = await getToken();
    dispatch(setToken({ token: res || "" }));
  };

  useEffect(() => {
    handleGetUserTokenFromStorage();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <>
            <Stack.Screen
              name="TabDashboard"
              options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
              }}
              component={TabRoutes}
            />
          </>
        ) : (
          <Stack.Screen
            name="Initial"
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
            component={Initial}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
