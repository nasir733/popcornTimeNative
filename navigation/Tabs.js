import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { useLayoutEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";
import { Ionicons } from "@expo/vector-icons";
const Tabss = createBottomTabNavigator();
const getHeaderName = (route) =>
  getFocusedRouteNameFromRoute(route) || "Movies";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);
  return (
    <Tabss.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          console.log(route);
          if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name == "Movies") {
            iconName += "film";
          } else if (route.name == "Search") {
            iconName += "search";
          } else if (route.name === "Discovery") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabss.Screen name="Movies" component={Movies} />
      <Tabss.Screen name="TV" component={Tv} />
      <Tabss.Screen name="Search" component={Search} />
      <Tabss.Screen name="Discovery" component={Favs} />
    </Tabss.Navigator>
  );
};

const styles = StyleSheet.create({});
