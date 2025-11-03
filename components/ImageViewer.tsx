import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet, useWindowDimensions } from 'react-native';

type Props = {
    imgSource: ImageSourcePropType;
    selectedImage?: string;
}

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  
  // Calculate responsive dimensions, leaving space for buttons (approx 200px at bottom)
  const maxImageWidth = Math.min(320, screenWidth * 0.85);
  const maxImageHeight = Math.min(440, (screenHeight - 200) * 0.7);
  const aspectRatio = 320 / 440; // Original aspect ratio
  
  let imageWidth = maxImageWidth;
  let imageHeight = imageWidth / aspectRatio;
  
  // If height exceeds available space, scale down based on height
  if (imageHeight > maxImageHeight) {
    imageHeight = maxImageHeight;
    imageWidth = imageHeight * aspectRatio;
  }

  return <Image 
    source={imageSource} 
    style={[styles.image, { width: imageWidth, height: imageHeight }]}
    contentFit="contain"
  />
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 18,
  },
});