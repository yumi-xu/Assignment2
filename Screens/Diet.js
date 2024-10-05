import React, { useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import ItemsList from "../Components/ItemsList";
import { AppContext } from "../AppContext";

const displayDietValue = (item) => item.calories + " cal";

const Diet = ({ navigation }) => {
  const { diet } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <ItemsList items={diet} displayValue={displayDietValue} />
      <Button
        title="Add Diet Entry"
        onPress={() => navigation.navigate("AddDietEntry")}
      />
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
