import React, { useContext, useEffect } from "react";
import ItemsList from "../Components/ItemsList";
import { AppContext } from "../AppContext";
import Container from "../Components/Container";
import { Button } from "react-native";

const displayDietValue = (item) => item.calories + " cal";

const Diet = ({ navigation }) => {
  const { diet } = useContext(AppContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("AddDietEntry")}
          title="Add"
        />
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <ItemsList items={diet} displayValue={displayDietValue} />
    </Container>
  );
};

export default Diet;
