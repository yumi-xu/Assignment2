import React from "react";
import { setToDB } from "../Firebase/firestoreHelper";
import Activity from "../Components/Activity";

const EditActivity = ({ route }) => {
  const activityData = route.params.activity;
  const activityId = activityData.id;
  const handleSave = (newActivity) => {
    setToDB(activityId, "activities", newActivity);
  };
  return <Activity activityData={activityData} onSave={handleSave} />;
};

export default EditActivity;
