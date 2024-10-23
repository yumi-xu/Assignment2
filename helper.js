import { StyleSheet } from "react-native";

export const colors = {
  headerIconColorActive: "#ffffff",
  headerIconColorInactive: "#888888",
  headerBackgroundColor: "#3e3a80",
  headerTextColor: "#ffffff",
  tabBarBackgroundColor: "#3e3a80",
  tabBarTextColorActive: "#ffffff",
  tabBarTextColorInactive: "#888888",
  containerBackgroundLightColor: "#b2b0ce",
  containerBackgroundDarkColor: "#605d92",
  itemListBackgroundDarkColor: "#3e3a80",
  itemListTextDarkColor: "#ffffff",
  itemListBackgroundLightColor: "#aaa6ec",
  itemListTextLightColor: "#3c3c7b",
  textLightColor: "#3c3c7b",
  textDarkColor: "#ffffff",
  inputBorderLightColor: "#888888",
  inputBorderDarkColor: "#ffffff",
  inputBackgroundLightColor: "#ffffff",
  inputBackgroundDarkColor: "#3e3a80",
  headerButtonPressedBackgroundColor: "#605d92",
  headerButtonColor: "#ffffff",
  primaryButtonBackgroundColor: "#363678",
  secondaryButtonBackgroundColor: "#9b085b",
};

export const commonStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonsWrap: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },

  headerButton: {
    padding: 10,
    marginRight: 10,
  },
  headerButtonPressed: {
    opacity: 0.5,
    backgroundColor: colors.headerButtonPressedBackgroundColor,
  },

  buttonText: {
    textAlign: "center",
    width: 150,
    color: colors.headerButtonColor,
    fontSize: 20,
    paddingVertical: 4,
  },

  primaryButton: {
    backgroundColor: colors.primaryButtonBackgroundColor,
  },
  primaryButtonPressed: {
    opacity: 0.5,
  },

  secondaryButton: {
    backgroundColor: colors.secondaryButtonBackgroundColor,
  },
  secondaryButtonPressed: {
    opacity: 0.5,
  },
});

export const commonLightStyles = StyleSheet.create({
  text: {
    color: colors.textLightColor,
  },
  input: {
    color: colors.textLightColor,
    borderColor: colors.inputBorderLightColor,
    backgroundColor: colors.inputBackgroundLightColor,
  },
  dropdown: {
    borderColor: colors.inputBorderLightColor,
    backgroundColor: colors.inputBackgroundLightColor,
  },
  dropdownText: {
    color: colors.textLightColor,
  },
  dropdownIcon: {
    tintColor: colors.textLightColor,
  },
  dropdownContainer: {
    backgroundColor: colors.inputBackgroundLightColor,
  },
  dropdownOptions: {
    backgroundColor: colors.inputBackgroundLightColor,
    borderColor: colors.inputBorderLightColor,
  },
});

export const commonDarkStyles = StyleSheet.create({
  text: {
    color: colors.textDarkColor,
  },
  input: {
    color: colors.textDarkColor,
    borderColor: colors.inputBorderDarkColor,
    backgroundColor: colors.inputBackgroundDarkColor,
  },
  dropdown: {
    color: colors.textDarkColor,
    borderColor: colors.inputBorderDarkColor,
    backgroundColor: colors.inputBackgroundDarkColor,
  },
  dropdownText: {
    color: colors.textDarkColor,
  },
  dropdownIcon: {
    tintColor: colors.textDarkColor,
  },
  dropdownContainer: {
    backgroundColor: colors.inputBackgroundDarkColor,
  },
  dropdownOptions: {
    backgroundColor: colors.inputBackgroundDarkColor,
    borderColor: colors.inputBorderDarkColor,
  },
});
