import { IconSymbol } from '@/components/ui/IconSymbol';
import { Pressable, Text, View } from 'react-native';

type Props = {
  label: string;
  theme?: 'primary';
  onPress: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
        return (
            <View className="w-80 h-16 mx-5 items-center justify-center p-1 border-4 border-yellow-400 rounded-2xl">
                <Pressable 
                    className="rounded-xl w-full h-full items-center justify-center flex-row bg-white" 
                    onPress={onPress}
                >
                    <IconSymbol name="photo" color="#25292e" size={18} />
                    <Text className="text-gray-800 text-base">{label}</Text>
                </Pressable>
            </View>
        )
    }

  return (
    <View className="w-80 h-17 mx-5 items-center justify-center p-1">
      <Pressable 
        className="rounded-xl w-full h-full items-center justify-center flex-row" 
        onPress={onPress}
      >
        <Text className="text-white text-base">{label}</Text>
      </Pressable>
    </View>
  );
}
