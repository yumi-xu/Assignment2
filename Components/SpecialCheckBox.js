import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";
import { colors, commonLightStyles, commonDarkStyles } from "../helper";
import { AppContext } from "../AppContext";

const SpecialCheckBox = ({ isChecked, setIsChecked }) => {
  const { theme } = useContext(AppContext);
  const commonStyles = theme === "light" ? commonLightStyles : commonDarkStyles;
  const checkBoxBgColor = isChecked
    ? colors.textLightColor
    : theme === "light"
      ? colors.textLightColor
      : colors.textDarkColor;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, commonStyles.text]}>
        This item is marked as special. Select the checkbox if you would like to
        approve it.
      </Text>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        color={checkBoxBgColor}
      />
    </View>
  );
};

export default SpecialCheckBox;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
});
