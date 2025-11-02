import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, View } from 'react-native';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View className="w-16 h-16 items-center justify-center rounded-full bg-white border-4 border-[#ffd33d]">
      <Pressable className="w-12 h-12 items-center justify-center rounded-full bg-white" onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}
