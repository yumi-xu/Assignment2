import React, { useContext, useState } from "react";
import { TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { commonDarkStyles, commonLightStyles, commonStyles } from "../helper";
import { AppContext } from "../AppContext";

const DateInput = ({ date, onDateChange }) => {
  const { theme } = useContext(AppContext);
  const themeStyles = theme === "light" ? commonLightStyles : commonDarkStyles;

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePress = () => {
    if (!date) {
      onDateChange(new Date());
    }
    setShowDatePicker((show) => !show);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    onDateChange(selectedDate || date);
  };

  return (
    <>
      <TextInput
        style={[commonStyles.input, themeStyles.input]}
        value={date ? date.toDateString() : ""}
        onPress={handlePress}
      />
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="inline"
          onChange={handleDateChange}
        />
      )}
    </>
  );
};

export default DateInput;
