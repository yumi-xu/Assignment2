import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./AppContext";
import Activities from "./Screens/Activities";
import Diet from "./Screens/Diet";
import Settings from "./Screens/Settings";
import AddActivity from "./Screens/AddActivity";
import AddDietEntry from "./Screens/AddDietEntry";
import { colors } from "./helper";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: colors.headerBackgroundColor,
  },
  headerTintColor: colors.headerTextColor,
};

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Tabs" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  ...headerOptions,
                  tabBarIcon: ({ size, focused }) => {
                    let iconName;
                    if (route.name === "Activities") {
                      iconName = "man";
                    } else if (route.name === "Diet") {
                      iconName = "fast-food-outline";
                    } else if (route.name === "Settings") {
                      iconName = "settings";
                    }
                    return (
                      <Ionicons
                        name={iconName}
                        size={size}
                        color={
                          focused
                            ? colors.headerIconColorActive
                            : colors.headerIconColorInactive
                        }
                      />
                    );
                  },
                  tabBarStyle: {
                    backgroundColor: colors.tabBarBackgroundColor, // 设置底部 Tab 的背景色 #3e3a80
                    borderTopWidth: 0, // 去掉 Tab 栏的顶部边框
                  },
                  tabBarInactiveTintColor: colors.tabBarTextColorInactive,
                  tabBarActiveTintColor: colors.tabBarTextColorActive,
                })}
              >
                <Tab.Screen
                  name="Activities"
                  component={Activities}
                  options={{ title: "Activities" }}
                />
                <Tab.Screen
                  name="Diet"
                  component={Diet}
                  options={{ title: "Diet" }}
                />
                <Tab.Screen
                  name="Settings"
                  component={Settings}
                  options={{ title: "Settings" }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="AddActivity"
            component={AddActivity}
            options={{ ...headerOptions, title: "Add" }}
          />
          <Stack.Screen
            name="AddDietEntry"
            component={AddDietEntry}
            options={{ ...headerOptions, title: "Add" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
