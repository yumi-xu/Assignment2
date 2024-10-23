import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { StyleSheet, Text, View } from "react-native";
import Container from "../Components/Container";
import { commonStyles } from "../helper";
import PressableButton from "../Components/PressableButton";

const Settings = () => {
  const { toggleTheme, theme } = useContext(AppContext);
  return (
    <Container>
      <View style={styles.container}>
        <PressableButton
          onPress={toggleTheme}
          componentStyle={commonStyles.primaryButton}
          pressedStyle={commonStyles.primaryButtonPressed}
        >
          <Text style={commonStyles.buttonText}>Toggle Theme</Text>
        </PressableButton>
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
