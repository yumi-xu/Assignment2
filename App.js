import React, { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Activities from './Screens/Activities';
import Diet from './Screens/Diet';
import { AppContext } from "./AppContext"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  //add some example
  const [activities, setActivities] = useState([
    { type: 'Yoga', date: 'Mon Sep 16 2024', duration: '60 min' },
    { type: 'Weights', date: 'Mon Jul 15 2024', duration: '120 min', warning: true },
  ]);

  const [diet, setDiet] = useState([
    { type: 'Breakfast', date: 'Tue Sep 17 2024', calories: '500' },
    { type: 'Lunch', date: 'Wed Sep 25 2024', calories: '900', warning: true },
  ]);

  return (
    <AppContext.Provider value={{ activities, diet }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Tabs" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Activities') {
                      iconName = 'man';
                    } else if (route.name === 'Diet') {
                      iconName = 'fast-food-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                })}
              >
                <Tab.Screen name="Activities" component={Activities} />
                <Tab.Screen name="Diet" component={Diet} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
