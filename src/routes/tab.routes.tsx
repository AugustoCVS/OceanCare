import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons, FontAwesome6 } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Home } from "../screens/Home/home.screen";
import { Events } from "@/screens/Events/events.screen";
import { Ranking } from "@/screens/Ranking/ranking.screen";

const Tab = createBottomTabNavigator();

export type TabNavigation = {
  Home: undefined;
  Events: undefined;
  Ranking: undefined;
};

export type TabTypes = NativeStackNavigationProp<TabNavigation>;

export default function TabRoutes() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#A6E3FF",
        tabBarInactiveTintColor: "#173042FC",
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          backgroundColor: "#FFFFF",
          paddingBottom: bottom,
          paddingTop: 8,
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={20} color={color} />
          ),
          tabBarLabel: "Inicio",
        }}
        component={Home}
      />

      <Tab.Screen
        name="Events"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event" size={20} color={color} />
          ),
          tabBarLabel: "Eventos",
        }}
        component={Events}
      />

      <Tab.Screen
        name="Ranking"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="ranking-star" size={20} color={color} />
          ),
          tabBarLabel: "Ranking",
        }}
        component={Ranking}
      />
    </Tab.Navigator>
  );
}
