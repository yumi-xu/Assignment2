import React, { useEffect, useState } from "react";
import ItemsList from "../Components/ItemsList";
import Container from "../Components/Container";
import { StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PressableButton from "../Components/PressableButton";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../Firebase/firebaseSetup";

const displayActivityValue = (item) => item.duration;

const Activities = ({ navigation }) => {
  const [activities, setActivities] = useState([]);

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

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "activities"),
      (querySnapshot) => {
        const newArray = [];
        querySnapshot.forEach((docSnapshot) => {
          newArray.push({ ...docSnapshot.data(), id: docSnapshot.id });
        });
        setActivities(newArray);
      },
    );
    // Cleanup function to detach the listener
    return () => {
      unsubscribe();
    };
  }, []);

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
