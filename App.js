import React, { createContext, useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Activities from "./Screens/Activities";
import Diet from "./Screens/Diet";
import { AppContext, AppProvider } from "./AppContext";
import AddActivity from "./Screens/AddActivity";
import AddDietEntry from "./Screens/AddDietEntry";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SettingsScreen = () => {
  const { toggleTheme, theme } = useContext(AppContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#E6E6FA" : "#333" },
      ]}
    >
      <Text style={{ color: theme === "light" ? "#000" : "#fff" }}>
        Settings
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tabs"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#E6E6FA",
            },
            headerTintColor: "#333",
          }}
        >
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
                    } else if (route.name === "Settings") {
                      iconName = "settings";
                    }
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                })}
              >
                <Tab.Screen name="Activities" component={Activities} />
                <Tab.Screen name="Diet" component={Diet} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="AddActivity"
            component={AddActivity}
            options={{ title: "Add" }}
          />
          <Stack.Screen
            name="AddDietEntry"
            component={AddDietEntry}
            options={{ title: "Add" }}
          />
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
