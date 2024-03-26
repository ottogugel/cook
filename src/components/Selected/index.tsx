import { View, Text } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons"
import { theme } from "@/theme";
import { Button } from "../Button";

type Props = {
  quantity: number
  onClear: () => void;
  onSearch: () => void;
}

export function Selected({quantity, onClear, onSearch}: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={SlideOutDown.duration(500)}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} selected ingredients</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>

      <Button title="Find" onPress={onSearch} />
    </Animated.View>
  );
}