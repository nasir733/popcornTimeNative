import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";
import Tabs from "./navigation/Tabs";
const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image == "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync;
    }
  });
const cacheFonts = (fonts) =>
  fonts.map((font) => [Font.loadAsync(font), Font.loadAsync(font)]);
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1536148935331-408321065b18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    ]);
    console.log(images);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
        {/* <Tabs /> */}
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onError={console.error}
      onFinish={onFinish}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
