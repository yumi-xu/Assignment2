import React from "react";
import { setToDB } from "../Firebase/firestoreHelper";
import DietComponent from "../Components/DietComponent";

const EditDiet = ({ route }) => {
  console.log(route);
  const dietData = route.params.diet;
  const dietId = dietData.id;
  const handleSave = (newDiet) => {
    setToDB(dietId, "diets", newDiet);
  };
  return <DietComponent dietData={dietData} onSave={handleSave} />;
};

export default EditDiet;
