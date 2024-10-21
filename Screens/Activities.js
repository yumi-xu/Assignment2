import React, { useContext, useEffect } from "react";
import ItemsList from "../Components/ItemsList";
import { AppContext } from "../AppContext";
import Container from "../Components/Container";
import { StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PressableButton from "../Components/PressableButton";

const displayActivityValue = (item) => item.duration;

const Activities = ({ navigation }) => {
  const { activities } = useContext(AppContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton
          componentStyle={styles.headerButton}
          onPress={() => navigation.navigate("AddActivity")}
          pressedStyle={styles.pressableStyle}
        >
          <AntDesign name="plus" size={24} color="white" />
          <MaterialIcons name="directions-run" size={24} color="white" />
        </PressableButton>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <ItemsList items={activities} displayValue={displayActivityValue} />
    </Container>
  );
};

export default Activities;

const styles = StyleSheet.create({
  headerButton: {
    padding: 10,
    marginRight: 10,
  },
  pressableStyle: {
    opacity: 0.5,
    backgroundColor: "#E6E6FA",
  },
});
