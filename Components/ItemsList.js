import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { AppContext } from "../AppContext";
import { colors } from "../helper";

const ItemsList = ({ items, displayValue, onItemPress }) => {
  const { theme } = useContext(AppContext);
  const themeStyles = theme === "light" ? lightStyles : darkStyles;
  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        const onPress = () => {
          onItemPress(item);
        };
        return (
          <Pressable onPress={onPress}>
            <View style={[styles.itemContainer, themeStyles.itemBg]}>
              <Text style={[styles.title, themeStyles.textColor]}>
                {item.type}
              </Text>
              {item.warning && <Text style={styles.warning}>⚠️</Text>}
              <Text style={themeStyles.textColor}>{item.date}</Text>
              <Text style={themeStyles.textColor}>{displayValue(item)}</Text>
            </View>
          </Pressable>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
  },
});

const lightStyles = StyleSheet.create({
  itemBg: { backgroundColor: colors.itemListBackgroundLightColor },
  textColor: { color: colors.itemListTextLightColor },
});

const darkStyles = StyleSheet.create({
  itemBg: { backgroundColor: colors.itemListBackgroundDarkColor },
  textColor: { color: colors.itemListTextDarkColor },
});

export default ItemsList;
