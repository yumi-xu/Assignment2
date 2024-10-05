import React, { createContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Activities from "./Screens/Activities";
import Diet from "./Screens/Diet";
import { AppProvider } from "./AppContext";
import AddActivity from "./Screens/AddActivity";
import AddDietEntry from "./Screens/AddDietEntry";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Tabs" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Activities") {
                      iconName = "man";
                    } else if (route.name === "Diet") {
                      iconName = "fast-food-outline";
                    }
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                })}
              >
                <Tab.Screen name="Activities" component={Activities} />
                <Tab.Screen name="Diet" component={Diet} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name="AddActivity" component={AddActivity} />
          <Stack.Screen name="AddDietEntry" component={AddDietEntry} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
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
