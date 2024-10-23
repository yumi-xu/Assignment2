import React, { useState, useContext } from "react";
import { Text, TextInput, Alert, View } from "react-native";
import { AppContext } from "../AppContext";
import DateInput from "../Components/DateInput";
import { commonDarkStyles, commonLightStyles, commonStyles } from "../helper";
import Container from "../Components/Container";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import confirmSave from "../utils/confirmSave";
import SpecialCheckBox from "./SpecialCheckBox";

const DietComponent = ({ dietData, onSave }) => {
  const { theme } = useContext(AppContext);
  const navigation = useNavigation();
  const showCheckbox = !!dietData && dietData.special;
  const [isChecked, setIsChecked] = useState(false);
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

  const handleSave = async () => {
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
    const special = (() => {
      // This is the only case that allows user to override `special` to false
      if (showCheckbox && isChecked) {
        return false;
      }
      return parseInt(calories) > 800;
    })();

    // Create new diet entry
    const newDietEntry = {
      type: description,
      date: date.toDateString(),
      calories,
      special,
    };

    // when editing an existing data, and user choose not to save, do nothing
    if (dietData && !(await confirmSave())) {
      return;
    }

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

      {showCheckbox && (
        <SpecialCheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
      )}
      <View style={commonStyles.buttonsWrap}>
        <PressableButton
          onPress={() => navigation.goBack()}
          componentStyle={commonStyles.secondaryButton}
          pressedStyle={commonStyles.secondaryButtonPressed}
        >
          <Text style={commonStyles.buttonText}>Cancel</Text>
        </PressableButton>
        <PressableButton
          onPress={handleSave}
          componentStyle={commonStyles.primaryButton}
          pressedStyle={commonStyles.primaryButtonPressed}
        >
          <Text style={commonStyles.buttonText}>Save</Text>
        </PressableButton>
      </View>
    </Container>
  );
};

export default DietComponent;
