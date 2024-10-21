import React from "react";
import { writeToDB } from "../Firebase/firestoreHelper";
import ActivityComponent from "../Components/ActivityComponent";

const AddActivity = () => {
  //save info to db
  const handleSave = (newActivity) => {
    writeToDB(newActivity, "activities");
  };
  return <ActivityComponent onSave={handleSave} />;
};

export default AddActivity;
