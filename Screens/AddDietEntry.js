import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { AppContext } from "../AppContext";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddDietEntry = ({ navigation }) => {
  const { addDiet } = useContext(AppContext);
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSave = () => {
    // Validate entries
    if (
      !description ||
      !calories ||
      isNaN(calories) ||
      parseInt(calories) < 0
    ) {
      Alert.alert("Invalid Input", "Please enter a valid diet entry.");
      return;
    }

    // Check for special conditions
    const warning = parseInt(calories) > 800;

    // Create new diet entry
    const newDietEntry = {
      type: description,
      date: date.toDateString(),
      calories: `${calories}`,
      warning,
    };

    // Add to context and go back
    addDiet(newDietEntry);
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Description:</Text>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />

      <Text>Calories:</Text>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        placeholder="Enter calories"
        value={calories}
        onChangeText={setCalories}
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

export default AddDietEntry;
