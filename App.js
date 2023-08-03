import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import DrawerNavigator from "./navigation/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { firebaseConfig } from "./config";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  );
}
