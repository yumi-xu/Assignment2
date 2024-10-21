import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AppContext } from "../AppContext";
import { colors } from "../helper";

const Container = ({ children }) => {
  const { theme } = useContext(AppContext);
  return (
    <View
      style={[styles.container, theme === "light" ? styles.light : styles.dark]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  light: {
    color: colors.textLightColor,
    backgroundColor: colors.containerBackgroundLightColor,
  },
  dark: {
    color: colors.textDarkColor,
    backgroundColor: colors.containerBackgroundDarkColor,
  },
});

export default Container;
