import {StyleSheet} from 'react-native';
import BaseStyles from '../../../Theme/BaseStyles';
import Colors from '../../../Theme/Colors';
import {fontWithSize, normalize} from '../../../Utils/Utility';

const styles = StyleSheet.create({
  container: {
    ...BaseStyles.fill,
  },
  flex: {
    ...BaseStyles.fill,
  },
  progress: {
    ...BaseStyles.fill,
    alignSelf: 'center',
  },
  profileImageStyle: {
    height: normalize(50),
    width: normalize(50),
    borderRadius: normalize(25),
  },
  iconStyle: {
    width: normalize(28),
    height: normalize(28),
  },
  iconViewStyle: {
    position: 'absolute',
    right: normalize(8),
    top: normalize(8),
  },
  nameContainerStyle: {
    marginHorizontal: normalize(8),
    paddingEnd: normalize(10),
    flex: 1,
  },
  nameStyle: {
    ...fontWithSize(18),
    fontStyle: 'normal',
  },
  emailStyle: {
    ...fontWithSize(16),
    fontStyle: 'normal',
  },
  divider: {
    width: '100%',
    backgroundColor: Colors.textPlaceholder,
    height: 1,
  },
});

export default styles;
