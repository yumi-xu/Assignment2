import React from "react";
import { setToDB } from "../Firebase/firestoreHelper";
import dietComponent from "../Components/DietComponent";

const EditDiet = ({ route }) => {
  const dietData = route.params.diet;
  const dietId = dietData.id;
  const handleSave = (newDiet) => {
    setToDB(dietId, "diets", newDiet);
  };
  return <dietComponent dietData={dietData} onSave={handleSave} />;
};

export default EditDiet;
