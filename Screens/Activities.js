import React, { useEffect, useState } from "react";
import ItemsList from "../Components/ItemsList";
import Container from "../Components/Container";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PressableButton from "../Components/PressableButton";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../Firebase/firebaseSetup";
import { colors, commonStyles } from "../helper";

const displayActivityValue = (item) => `${item.duration} min`;

const Activities = ({ navigation }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton
          componentStyle={commonStyles.headerButton}
          pressedStyle={commonStyles.headerButtonPressed}
          onPress={() => navigation.navigate("AddActivity")}
        >
          <AntDesign
            name="plus"
            size={24}
            color={colors.headerIconColorActive}
          />
          <MaterialIcons
            name="directions-run"
            size={24}
            color={colors.headerIconColorActive}
          />
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

  const onItemPress = (item) => {
    navigation.navigate("EditActivity", { activity: item });
  };

  return (
    <Container>
      <ItemsList
        items={activities}
        displayValue={displayActivityValue}
        onItemPress={onItemPress}
      />
    </Container>
  );
};

export default Activities;
