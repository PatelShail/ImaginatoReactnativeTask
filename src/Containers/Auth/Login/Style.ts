import {StyleSheet} from 'react-native';
import BaseStyles from '../../../Theme/BaseStyles';
import Colors from '../../../Theme/Colors';
import {fontWithSize, normalize} from '../../../Utils/Utility';

const styles = StyleSheet.create({
  container: {
    ...BaseStyles.fill,
    ...BaseStyles.center,
  },
  input: {
    width: '90%',
  },
  hintText: {
    color: Colors.textPlaceholder,
    ...fontWithSize(16),
  },
  inputText: {
    color: Colors.black,
    ...fontWithSize(16),
  },
  buttonText: {
    ...fontWithSize(18),
    color: Colors.white,
  },
  buttonBackground: {
    backgroundColor: Colors.primary,
    borderRadius: normalize(8),
    paddingHorizontal: normalize(50),
    paddingVertical: normalize(10),
    marginTop: normalize(20),
  },
});

export default styles;
