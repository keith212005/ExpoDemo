import { PixelRatio, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

// get responsiveHeight
export const responsiveHeight = (h: number) => {
  return PixelRatio.roundToNearestPixel(height * (h / 100));
};

// get responsiveWidth
export const responsiveWidth = (w: number) => {
  return PixelRatio.roundToNearestPixel(width * (w / 100));
};
