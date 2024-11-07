import React from "react";
import { deleteFromDB, setToDB } from "../Firebase/firestoreHelper";
import ActivityComponent from "../Components/ActivityComponent";

const EditActivity = ({ route }) => {
  const activityData = route.params.activity;
  const activityId = activityData.id;
  const handleSave = (newActivity) => {
    setToDB(activityId, "activities", newActivity);
  };
  const handleDelete = ({ id }) => {
    deleteFromDB(id, "activities");
  };
  return (
    <ActivityComponent
      activityData={activityData}
      onSave={handleSave}
      onDelete={handleDelete}
    />
  );
};

export default EditActivity;
