import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  ViewStyle,
  ImageProps,
} from "react-native";

interface ProgressiveImageProps extends ImageProps {
  containerStyle?: ViewStyle;
}

export const ProgressiveImage = (props: ProgressiveImageProps): any => {
  const { thumbnailSource, source, style }: any = props;
  const thumbnailAnimated = new Animated.Value(0);

  const imageAnimated = new Animated.Value(0);

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={[styles.container, { ...style }]}>
      <Animated.Image
        {...props}
        source={thumbnailSource}
        style={[style, { opacity: thumbnailAnimated }]}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
      />
      <Animated.Image
        {...props}
        source={source}
        style={[styles.imageOverlay, { opacity: imageAnimated }, style]}
        onLoad={onImageLoad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: "#e1e4e8",
  },
});
