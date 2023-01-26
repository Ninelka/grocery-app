import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { COLORS, GlobalStyles } from '../../../constants';

interface IBadge {
  counter: number | string;
  size?: string;
  style?: ViewStyle;
}

function Badge({ counter, size, style }: IBadge) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, size === 'small' && styles.smallText]}>
        {counter}
      </Text>
    </View>
  );
}

export default Badge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.red,
    borderRadius: 100,
    paddingVertical: 2,
    paddingHorizontal: GlobalStyles.spacing.xs,
  },
  text: {
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.white,
  },
  smallText: {
    fontSize: GlobalStyles.fontSize.caption1,
  },
});
