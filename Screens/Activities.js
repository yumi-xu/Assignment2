import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import ItemsList from "../Components/ItemsList";
import { AppContext } from "../AppContext";

const displayActivityValue = (item) => item.duration;

const Activities = ({ navigation }) => {
  const { activities, theme } = useContext(AppContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("AddActivity")}
          title="Add"
          color={theme === "light" ? "#000" : "#fff"}
        />
      ),
    });
  }, [navigation, theme]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#E6E6FA" : "#333" },
      ]}
    >
      <ItemsList items={activities} displayValue={displayActivityValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    padding: 10,
  },
});

export default Activities;
