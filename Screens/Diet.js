import React, { useEffect, useState } from "react";
import ItemsList from "../Components/ItemsList";
import Container from "../Components/Container";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PressableButton from "../Components/PressableButton";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../Firebase/firebaseSetup";
import { colors, commonStyles } from "../helper";

const displayDietValue = (item) => item.calories + " cal";

const Diet = ({ navigation }) => {
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton
          componentStyle={commonStyles.headerButton}
          pressedStyle={commonStyles.headerButtonPressed}
          onPress={() => navigation.navigate("AddDietEntry")}
        >
          <AntDesign
            name="plus"
            size={24}
            color={colors.headerIconColorActive}
          />
          <MaterialIcons
            name="fastfood"
            size={24}
            color={colors.headerIconColorActive}
          />
        </PressableButton>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "diets"),
      (querySnapshot) => {
        const newArray = [];
        querySnapshot.forEach((docSnapshot) => {
          newArray.push({ ...docSnapshot.data(), id: docSnapshot.id });
        });
        setDiets(newArray);
      },
    );
    // Cleanup function to detach the listener
    return () => {
      unsubscribe();
    };
  }, []);

  const onItemPress = (item) => {
    navigation.navigate("EditDiet", { diet: item });
  };

  return (
    <Container>
      <ItemsList
        items={diets}
        displayValue={displayDietValue}
        onItemPress={onItemPress}
      />
    </Container>
  );
};

export default Diet;
