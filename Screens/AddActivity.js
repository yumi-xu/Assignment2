import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { AppContext } from "../AppContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";

const AddActivity = ({ navigation }) => {
  const { addActivity } = useContext(AppContext);
  const [activityType, setActivityType] = useState(null);
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (!activityType || !duration || isNaN(duration)) {
      Alert.alert("Invalid Input", "Please enter valid activity details.");
      return;
    }

    // Check for special conditions
    const warning =
      (activityType === "Running" || activityType === "Weights") &&
      parseInt(duration) > 60;

    // Create new activity
    const newActivity = {
      type: activityType,
      date: date.toDateString(),
      duration: `${duration} min`,
      warning,
    };

    // Add to context and go back
    addActivity(newActivity);
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Select an Activity Type:</Text>
      <DropDownPicker
        open={open}
        value={activityType}
        items={[
          { label: "Walking", value: "Walking" },
          { label: "Running", value: "Running" },
          { label: "Swimming", value: "Swimming" },
          { label: "Weights", value: "Weights" },
          { label: "Yoga", value: "Yoga" },
          { label: "Cycling", value: "Cycling" },
          { label: "Hiking", value: "Hiking" },
        ]}
        setOpen={setOpen}
        setValue={setActivityType}
        placeholder="Select an Activity"
      />

      <Text>Duration (min):</Text>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        placeholder="Enter duration in minutes"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />

      <Text>Select Date:</Text>
      <DateTimePicker
        value={date}
        mode="date"
        display="inline"
        onChange={(event, selectedDate) => setDate(selectedDate || date)}
      />

      <Button title="Save" onPress={handleSave} />
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AddActivity;