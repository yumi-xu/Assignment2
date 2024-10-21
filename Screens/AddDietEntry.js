import React from "react";
import { writeToDB } from "../Firebase/firestoreHelper";
import DietComponent from "../Components/DietComponent";

const AddDietEntry = () => {
  //save info to db
  const handleSave = (newDiet) => {
    writeToDB(newDiet, "diets");
  };
  return <DietComponent onSave={handleSave} />;
};

export default AddDietEntry;
