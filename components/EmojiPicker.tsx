import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PropsWithChildren } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className="h-1/4 w-full bg-[#25292e] rounded-t-[18px] absolute bottom-0">
        <View className="h-[16%] bg-[#464C55] rounded-t-[10px] px-5 flex-row items-center justify-between">
          <Text className="text-white text-base">Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
    </View>
  );
}
