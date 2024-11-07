import { Alert } from "react-native";

const confirm = (title, message) => {
  return new Promise((resolve) => {
    Alert.alert(
      title,
      message,
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

export default confirm;
