import {Alert} from 'react-native';

const alert = {
  show: (
    message: string,
    onPress?: (value?: string) => void,
    onDismiss?: () => void,
    title : string = "Imaginato",
  ): void => {
    Alert.alert(
      title,
      message,
      [
        {
          text: "ok",
          onPress: onPress,
        },
      ],
      {cancelable: false, onDismiss: onDismiss},
    );
  },
};

export default alert;
