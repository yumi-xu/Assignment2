import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import ItemsList from "../Components/ItemsList";
import { AppContext } from "../AppContext";

const displayDietValue = (item) => item.calories + " cal";

const Diet = ({ navigation }) => {
  const { diet, theme } = useContext(AppContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("AddDietEntry")}
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
      <ItemsList items={diet} displayValue={displayDietValue} />
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

export default Diet;
