import {
  Dimensions,
  Platform,
  PixelRatio,
} from 'react-native';

const TAG = 'Utility';

export const isBlank = (element: any) => {
  if (element === null || element === undefined) {
    return true;
  }

  if (element instanceof String && element.length === 0) {
    return true;
  }

  if (Array.isArray(element) && element.length === 0) {
    return true;
  }

  return Object.keys(element).length === 0;
};

export const emailRegex = /^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

// DeviceSize
export const DeviceSize = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const isPlatformIOS = Platform.OS === 'ios';

// based on iPhone 5s's scale
const scale = DeviceSize.width / 375;

export function normalize(Size: number) {
  const newSize = Size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const fontWithSize = (size: number) => {
  return {
    fontSize: normalize(size),
  };
};
