import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet, useWindowDimensions } from 'react-native';

type Props = {
    imgSource: ImageSourcePropType;
    selectedImage?: string;
}

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  
  // Container is flex-[2], so it's 2/3 of screen height
  const containerHeight = (screenHeight * 2) / 3;
  const containerWidth = screenWidth - 32; // Account for px-4 padding (16px each side)

  return (
    <Image 
      source={imageSource} 
      style={[styles.image, { 
        width: containerWidth,
        height: containerHeight,
      }]}
      contentFit="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    maxHeight: 500,
    borderRadius: 18,
  },
});