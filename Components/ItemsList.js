import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AppContext } from "../AppContext";

const ItemsList = ({ items, displayValue }) => {
  const { theme } = useContext(AppContext);
  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View
          style={[
            styles.itemContainer,
            { backgroundColor: theme === "light" ? "#5D5DFF" : "#444" },
          ]}
        >
          <Text
            style={[
              styles.title,
              { color: theme === "light" ? "white" : "#ccc" },
            ]}
          >
            {item.type}
          </Text>
          <Text
            style={[
              styles.date,
              { color: theme === "light" ? "white" : "#ccc" },
            ]}
          >
            {item.date}
          </Text>
          <Text
            style={[
              styles.value,
              { color: theme === "light" ? "white" : "#ccc" },
            ]}
          >
            {displayValue(item)}
          </Text>
          {item.warning && <Text style={styles.warning}>⚠️</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#5D5DFF",
    borderRadius: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  date: {
    color: "white",
  },
  value: {
    color: "white",
  },
  warning: {
    color: "yellow",
  },
});

export default ItemsList;
