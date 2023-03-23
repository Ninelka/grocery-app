import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';

interface IFilterBtn {
  onPress?: () => void;
  style?: ViewStyle;
}

function FilterBtn({ onPress, style }: IFilterBtn) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Ionicons name="options-outline" size={24} />
      <Text style={styles.text}>Sort & Filter</Text>
    </Pressable>
  );
}

export default FilterBtn;

const styles = StyleSheet.create({
  container: {
    width: 172,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: GlobalStyles.spacing.m,
  },
  text: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.labelsPrimary,
    marginLeft: GlobalStyles.spacing.xs,
  },
  pressed: {
    opacity: 0.75,
  },
});
