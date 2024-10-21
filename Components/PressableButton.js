import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const PressableButton = ({
  children,
  onPress,
  componentStyle,
  pressedStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.defaultStyle,
        componentStyle,
        pressed && pressedStyle,
      ]}
    >
      <View style={styles.buttonContainer}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    padding: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#ff6666",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PressableButton;
