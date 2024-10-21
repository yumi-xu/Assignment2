import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Button, StyleSheet, Text, View } from "react-native";
import Container from "../Components/Container";

const Settings = () => {
  const { toggleTheme, theme } = useContext(AppContext);
  return (
    <Container>
      <View style={styles.container}>
        <Button title="Toggle Theme" onPress={toggleTheme} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
