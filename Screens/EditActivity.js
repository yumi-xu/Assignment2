import React from "react";
import { setToDB } from "../Firebase/firestoreHelper";
import ActivityComponent from "../Components/ActivityComponent";

const EditActivity = ({ route }) => {
  const activityData = route.params.activity;
  const activityId = activityData.id;
  const handleSave = (newActivity) => {
    setToDB(activityId, "activities", newActivity);
  };
  return <ActivityComponent activityData={activityData} onSave={handleSave} />;
};

export default EditActivity;
