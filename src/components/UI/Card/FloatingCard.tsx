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

  const absoluteBottom = () => position === 'bottom' && styles.bottomPosition;
  const absoluteBottomCentered = () =>
    position === 'bottom-center' && styles.bottomCenterPosition;

  const shadowed = useMemo(() => {
    return withShadow && styles.shadow;
  }, [withShadow]);

  return (
    <View
      style={[
        styles.container,
        { borderRadius: cardRadius() },
        absoluteBottom(),
        absoluteBottomCentered(),
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
  bottomCenterPosition: {
    position: 'absolute',
    bottom: GlobalStyles.spacing.l,
    alignSelf: 'center',
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
