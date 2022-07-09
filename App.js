import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  Button,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar"; // automatically switches bar style based on theme!
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
// import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import ProfileScreen from "./src/screens/Profile";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import Map from "./src/screens/Map";
import Add from "./src/screens/Add";
import Notification from "./src/screens/Notification";
const Tab = createBottomTabNavigator();
export const ThemeContext = React.createContext();

const MyDefaultTheme = {
  colors: {
    background: "rgb(242, 242, 242)",
    border: "rgb(216, 216, 216)",
    card: "rgb(255, 255, 255)",
    notification: "rgb(255, 59, 48)",
    primary: "rgb(0, 122, 255)",
    text: "rgb(28, 28, 30)",
  },
  dark: false,
};
const MyDarkTheme = {
  colors: {
    background: "#27292B",
    border: "#27292B",
    card: "#27292B",
    notification: "rgb(255, 59, 48)",
    primary: "rgb(0, 122, 255)",
    text: "#EBEDF0",
  },
  dark: true,
};
export default function App() {
  const scheme = useColorScheme();

  const [theme, setTheme] = useState(MyDefaultTheme);
  const { colors } = theme;

  const HomeScreen = props => {
    return <Home {...props} colors={colors} />;
  };
  const MapScreen = props => {
    const setThemeProps = propsTheme => {
      setTheme(propsTheme);
    };
    return (
      <Map
        {...props}
        colors={colors}
        theme={theme.dark}
        changeTheme={() => {
          setTheme(theme.dark == true ? MyDefaultTheme : MyDarkTheme);
        }}
      />
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          initialRouteName="Map"
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => {
                return (
                  <FontAwesome5 name="compass" size={24} color={colors.text} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarIcon: () => {
                return (
                  <Ionicons name="ios-map" size={24} color={colors.text} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Add"
            component={Add}
            options={{
              tabBarIcon: ({ tintColor }) => {
                return (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 10, // space from bottombar
                      height: 58,
                      width: 58,
                      borderRadius: 58,
                      backgroundColor: "#F5313A",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome5 name="plus" size={24} color="white" />
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              tabBarIcon: () => {
                return <Octicons name="bell" size={24} color={colors.text} />;
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => {
                return (
                  <FontAwesome5 name="user" size={24} color={colors.text} />
                );
              },
            }}
          />
        </Tab.Navigator>
        <StatusBar style={theme.dark ? "light" : "dark"} />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
