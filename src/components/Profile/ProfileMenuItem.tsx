import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IoniconsType } from '../../types/expo-icons';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';

interface IProfileMenuItem {
  title: string;
  iconName: IoniconsType;
  iconColor: string;
  iconBgColor: string;
  withArrow?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
}

const ProfileMenuItem: React.FC<IProfileMenuItem> = ({
  title,
  iconName,
  iconColor,
  iconBgColor,
  withArrow,
  style,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.root, style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.row}>
        <View style={[styles.icon, { backgroundColor: iconBgColor }]}>
          <Ionicons name={iconName} color={iconColor} size={24} />
        </View>
        <Text style={styles.title}>{title}</Text>
        {withArrow && (
          <Ionicons
            style={styles.iconRight}
            name="chevron-forward"
            size={24}
            color={COLORS.black}
          />
        )}
      </View>
    </Pressable>
  );
};

export default ProfileMenuItem;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.bgPrimary,
    padding: GlobalStyles.spacing.xs,
    borderRadius: GlobalStyles.spacing.xs,
  },
  pressed: {
    opacity: 0.7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: GlobalStyles.spacing.xl,
    height: GlobalStyles.spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: GlobalStyles.spacing.xs,
    marginRight: GlobalStyles.spacing.s,
  },
  title: {
    flex: 1,
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.labelsPrimary,
  },
  iconRight: {
    marginLeft: GlobalStyles.spacing.s,
  },
});
