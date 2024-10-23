import React from "react";
import { Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";

const SpecialCheckBox = ({ isChecked, setIsChecked }) => {
  return (
    <View>
      <Text>
        This item is marked as special. Select the checkbox if you would like to
        approve it.
      </Text>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? "#00f" : undefined}
      />
    </View>
  );
};

export default SpecialCheckBox;
