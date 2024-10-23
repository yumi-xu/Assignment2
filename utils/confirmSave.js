import { Alert } from "react-native";

const confirmSave = () => {
  return new Promise((resolve) => {
    Alert.alert(
      "Important", // Title
      "Are you sure you want to save these changes?", // Message
      [
        {
          text: "No",
          onPress: () => resolve(false),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => resolve(true),
        },
      ],
      { cancelable: true },
    );
  });
};

export default confirmSave;
