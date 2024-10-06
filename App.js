import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AppProvider } from "./AppContext";
import Activities from "./Screens/Activities";
import Diet from "./Screens/Diet";
import Settings from "./Screens/Settings";
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
                    } else if (route.name === "Settings") {
                      iconName = "settings";
                    }
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarStyle: {
                    backgroundColor: "red", // 设置底部 Tab 的背景色
                    borderTopWidth: 0, // 去掉 Tab 栏的顶部边框
                  },
                  tabBarLabelStyle: {
                    color: "#333", // 设置 Tab 标签的颜色
                  },
                })}
              >
                <Tab.Screen
                  name="Activities"
                  component={Activities}
                  options={{
                    title: "Activities",
                    headerStyle: {
                      backgroundColor: "red",
                    },
                    headerTintColor: "#333",
                  }}
                />
                <Tab.Screen
                  name="Diet"
                  component={Diet}
                  options={{
                    title: "Diet",
                    headerStyle: {
                      backgroundColor: "red",
                    },
                    headerTintColor: "#333",
                  }}
                />
                <Tab.Screen
                  name="Settings"
                  component={Settings}
                  options={{
                    title: "Settings",
                    headerStyle: {
                      backgroundColor: "red",
                    },
                    headerTintColor: "#333",
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="AddActivity"
            component={AddActivity}
            options={{
              title: "Add",
              headerStyle: {
                backgroundColor: "#E6E6FA",
              },
              headerTintColor: "#333",
            }}
          />
          <Stack.Screen
            name="AddDietEntry"
            component={AddDietEntry}
            options={{
              title: "Add",
              headerStyle: {
                backgroundColor: "#E6E6FA",
              },
              headerTintColor: "#333",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
