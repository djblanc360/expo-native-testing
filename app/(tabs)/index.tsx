import * as MediaLibrary from 'expo-media-library';
import React, { useEffect, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import EmojiList from '@/components/EmojiList';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiSticker from '@/components/EmojiSticker';

import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';
import ImageViewer from '@/components/ImageViewer';

import Button from '@/components/ui/Button';
import * as ImagePicker from 'expo-image-picker';

import { ImageSourcePropType, View } from 'react-native';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

import PlaceholderImage from '@/assets/images/background-image.png';

export default function Index() {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);
  
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisiable, setIsModalVisiable] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisiable(true);
  }

  const onModalClose = () => {
    setIsModalVisiable(false);
  }

  const onSaveImageAsync = () => {
    console.log('Save image');
  }

  return (
    <GestureHandlerRootView className="flex-1">
    <View className="flex-1 bg-[#25292e] items-center justify-center">
      <View ref={imageRef} className='flex-1 justify-start items-center px-4 pt-20 w-full' collapsable={false}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View className="absolute bottom-24 px-4 w-full">
          <View className="flex-row gap-4 justify-center items-center">
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
      <View className="absolute bottom-24 px-4 w-full">
        <View className="gap-3 items-center">
          <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      </View>
      )}
      <EmojiPicker isVisible={isModalVisiable} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
    </GestureHandlerRootView>
  );
}