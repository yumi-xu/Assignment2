import React from "react";
import { writeToDB } from "../Firebase/firestoreHelper";
import Activity from "../Components/Activity";

const AddActivity = () => {
  const handleSave = (newActivity) => {
    writeToDB(newActivity, "activities");
  };
  return <Activity onSave={handleSave} />;
};

export default AddActivity;
