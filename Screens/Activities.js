import React, { useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import ItemsList from "../Components/ItemsList";
import { AppContext } from "../AppContext";

const displayActivityValue = (item) => item.duration;

const Activities = ({ navigation }) => {
  const { activities } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <ItemsList items={activities} displayValue={displayActivityValue} />
      <Button
        title="Add Activity"
        onPress={() => navigation.navigate("AddActivity")}
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

export default Activities;
