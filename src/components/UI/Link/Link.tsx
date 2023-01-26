import { Pressable, StyleSheet, Text, TextStyle } from 'react-native';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';
import { ReactNode } from 'react';

interface ILink {
  children: ReactNode;
  onPress?: () => void;
  textStyle?: TextStyle;
  isLinkPressedForTest?: boolean;
}

function Link({ onPress, children, textStyle, isLinkPressedForTest }: ILink) {
  return (
    <Pressable
      testID="link-btn-id"
      testOnly_pressed={isLinkPressedForTest}
      style={({ pressed }) => [pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text testID="link-btn-text" style={[styles.text, textStyle]}>
        {children}
      </Text>
    </Pressable>
  );
}

export default Link;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: GlobalStyles.fontSize.headline,
    color: COLORS.primaryGreen,
  },
  pressed: {
    opacity: 0.7,
  },
});
