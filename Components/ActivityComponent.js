import React, { useState, useContext } from "react";
import { Text, TextInput, Alert, View } from "react-native";
import { AppContext } from "../AppContext";
import DropDownPicker from "react-native-dropdown-picker";
import DateInput from "../Components/DateInput";
import { commonStyles, commonLightStyles, commonDarkStyles } from "../helper";
import Container from "../Components/Container";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import SpecialCheckBox from "./SpecialCheckBox";
import confirmSave from "../utils/confirmSave";

const ActivityComponent = ({ activityData, onSave }) => {
  const { theme } = useContext(AppContext);
  const navigation = useNavigation();
  const showCheckbox = !!activityData && activityData.special;
  const [isChecked, setIsChecked] = useState(false);
  const [activityType, setActivityType] = useState(
    (activityData && activityData.type) || undefined,
  );
  const [duration, setDuration] = useState(
    (activityData && activityData.duration) || "",
  );
  const [date, setDate] = useState(() => {
    const date = activityData && activityData.date;
    return date ? new Date(date) : null;
  });
  const [open, setOpen] = useState(false);
  const themeStyles = theme === "light" ? commonLightStyles : commonDarkStyles;

  const handleSave = async () => {
    // Validate entries
    if (
      !activityType ||
      !duration ||
      isNaN(duration) ||
      parseInt(duration) < 0
    ) {
      Alert.alert("Invalid Input", "Please enter valid activity details.");
      return;
    }

    // Check for special conditions
    const special = (() => {
      // This is the only case that allows user to override `special` to false
      if (showCheckbox && isChecked) {
        return false;
      }
      return (
        (activityType === "Running" || activityType === "Weights") &&
        parseInt(duration) > 60
      );
    })();

    // Create new activity
    const newActivity = {
      type: activityType,
      date: date.toDateString(),
      duration,
      special,
    };

    // when editing an existing data, and user choose not to save, do nothing
    if (activityData && !(await confirmSave())) {
      return;
    }

    onSave(newActivity);
    navigation.goBack();
  };

  return (
    <Container>
      <Text style={themeStyles.text}>Activity *</Text>
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
        style={[commonStyles.dropdown, themeStyles.dropdown]}
        textStyle={themeStyles.dropdownText}
        arrowIconStyle={themeStyles.dropdownIcon}
        tickIconStyle={themeStyles.dropdownIcon}
        dropDownContainerStyle={themeStyles.dropdownOptions}
      />

      <Text style={themeStyles.text}>Duration (min) *</Text>
      <TextInput
        style={[commonStyles.input, themeStyles.input]}
        value={duration}
        onChangeText={setDuration}
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

export default ActivityComponent;
