import React from "react";
import { deleteFromDB, setToDB } from "../Firebase/firestoreHelper";
import DietComponent from "../Components/DietComponent";

const EditDiet = ({ route }) => {
  const dietData = route.params.diet;
  const dietId = dietData.id;
  const handleSave = (newDiet) => {
    setToDB(dietId, "diets", newDiet);
  };
  const handleDelete = ({ id }) => {
    deleteFromDB(id, "diets");
  };
  return (
    <DietComponent
      dietData={dietData}
      onSave={handleSave}
      onDelete={handleDelete}
    />
  );
};

export default EditDiet;
