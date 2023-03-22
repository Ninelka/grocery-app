import React, { useMemo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { COLORS, GlobalStyles } from '../../../constants';

interface IFloatingCard {
  children: React.ReactNode;
  type?: string;
  position?: string;
  style?: ViewStyle;
  withShadow?: boolean;
}
const FloatingCard: React.FC<IFloatingCard> = ({
  children,
  type,
  position,
  style,
  withShadow,
}) => {
  const cardRadius = () =>
    type === 'ellipse' ? GlobalStyles.spacing.xxl : GlobalStyles.spacing.xs;

  const absolutBottom = () => position === 'bottom' && styles.bottomPosition;
  const shadowed = useMemo(() => {
    return withShadow && styles.shadow;
  }, [withShadow]);

  return (
    <View
      style={[
        styles.container,
        { borderRadius: cardRadius() },
        absolutBottom(),
        shadowed,
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default FloatingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bgPrimary,
  },
  bottomPosition: {
    position: 'absolute',
    bottom: GlobalStyles.spacing.l,
    left: GlobalStyles.spacing.s,
    right: GlobalStyles.spacing.s,
  },
  shadow: {
    // shadow for android
    elevation: 16,
    // shadow for ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 16,
    shadowOpacity: 0.3,
  },
});
