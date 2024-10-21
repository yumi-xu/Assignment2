import React, { useContext, useEffect } from "react";
import ItemsList from "../Components/ItemsList";
import { AppContext } from "../AppContext";
import Container from "../Components/Container";
import { Button } from "react-native";

const displayActivityValue = (item) => item.duration;

const Activities = ({ navigation }) => {
  const { activities } = useContext(AppContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("AddActivity")}
          title="Add"
        />
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
