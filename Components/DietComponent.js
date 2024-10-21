import React, { useState, useContext } from "react";
import { Text, TextInput, Button, Alert, View } from "react-native";
import { AppContext } from "../AppContext";
import DateInput from "../Components/DateInput";
import { commonDarkStyles, commonLightStyles, commonStyles } from "../helper";
import Container from "../Components/Container";
import { useNavigation } from "@react-navigation/native";

const DietComponent = ({ dietData, onSave }) => {
  const { theme } = useContext(AppContext);
  const navigation = useNavigation();
  const [description, setDescription] = useState(
    (dietData && dietData.type) || undefined,
  );
  const [calories, setCalories] = useState(
    (dietData && dietData.calories) || undefined,
  );
  const [date, setDate] = useState(() => {
    const date = dietData && dietData.date;
    return date ? new Date(date) : null;
  });
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
      calories,
      warning,
    };

    onSave(newDietEntry);
    navigation.goBack();
  };

  return (
    <Container>
      <Text style={themeStyles.text}>Description *</Text>
      <TextInput
        style={[commonStyles.input, themeStyles.input]}
        value={description}
        onChangeText={setDescription}
      />

      <Text style={themeStyles.text}>Calories *</Text>
      <TextInput
        style={[commonStyles.input, themeStyles.input]}
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
      />

      <Text style={themeStyles.text}>Date *</Text>
      <DateInput date={date} onDateChange={(date) => setDate(date)} />

      <View style={commonStyles.buttonsWrap}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save" onPress={handleSave} />
      </View>
    </Container>
  );
};

export default DietComponent;
