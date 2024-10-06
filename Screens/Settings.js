import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Button, StyleSheet, Text, View } from "react-native";

const Settings = () => {
  const { toggleTheme, theme } = useContext(AppContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#E6E6FA" : "#333" },
      ]}
    >
      <Text style={{ color: theme === "light" ? "#000" : "#fff" }}>
        Settings
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
