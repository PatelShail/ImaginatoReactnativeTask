import {StyleSheet} from 'react-native';
import BaseStyles from '../../../Theme/BaseStyles';
import {normalize} from '../../../Utils/Utility';

const styles = StyleSheet.create({
  container: {
    ...BaseStyles.fill,
    ...BaseStyles.crossCenter,
  },
  profileImageStyle: {
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(50),
    marginTop: normalize(40),
  },
});

export default styles;
