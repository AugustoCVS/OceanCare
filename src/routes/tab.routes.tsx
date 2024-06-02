import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Home } from "../screens/Home/home.screen";

const Tab = createBottomTabNavigator();

export type TabNavigation = {
  Home: undefined;
};

export type TabTypes = NativeStackNavigationProp<TabNavigation>;

export default function TabRoutes() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#749E50",
        tabBarInactiveTintColor: "#173042FC",
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          backgroundColor: "#F9F8F8",
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
    </Tab.Navigator>
  );
}
