import React, { useState, useContext } from "react";
import { Text, TextInput, Button, Alert, View } from "react-native";
import { AppContext } from "../AppContext";
import DateInput from "../Components/DateInput";
import { commonDarkStyles, commonLightStyles, commonStyles } from "../helper";
import Container from "../Components/Container";

const AddDietEntry = ({ navigation }) => {
  const { addDiet, theme } = useContext(AppContext);
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState(null);
  const themeStyles = theme === "light" ? commonLightStyles : commonDarkStyles;

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
    <Container>
      <Text style={themeStyles.text}>Description:</Text>
      <TextInput
        style={[commonStyles.input, themeStyles.input]}
        // placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={themeStyles.text}>Calories:</Text>
      <TextInput
        style={[commonStyles.input, themeStyles.input]}
        // placeholder="Enter calories"
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
      />

      <Text style={themeStyles.text}>Select Date:</Text>
      <DateInput date={date} onDateChange={(date) => setDate(date)} />

      <View style={commonStyles.buttonsWrap}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save" onPress={handleSave} />
      </View>
    </Container>
  );
};

export default AddDietEntry;
