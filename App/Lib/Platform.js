import { Dimensions } from "react-native";

/**
 *
 * @param {ScaledSize} dim the dimensions object
 * @param {*} limit the limit on the scaled dimension
 */
const msp = (dim, limit) => {
  return dim.scale * dim.width >= limit || dim.scale * dim.height >= limit;
};

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const { width, height } = Dimensions.get("window");
  return height >= width;
};

/**
 * Returns true of the screen is in landscape mode
 */
const isLandscape = () => {
  const { width, height } = Dimensions.get("window");
  return height < width;
};

/**
 * Returns true if the device is a tablet
 */
const isTablet = () => {
  const dim = Dimensions.get("screen");
  return (
    (dim.scale < 2 && msp(dim, 1000)) || (dim.scale >= 2 && msp(dim, 1900))
  );
};

/**
 * Returns true if the device is a phone
 */
const isPhone = () => {
  return !isTablet();
};

export default {
  isPortrait,
  isLandscape,
  isTablet,
  isPhone
};
