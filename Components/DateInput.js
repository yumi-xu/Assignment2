import React, { useState } from "react";
import { TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateInput = ({ date, onDateChange }) => {
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
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
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
