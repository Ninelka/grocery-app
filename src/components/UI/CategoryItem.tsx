import { StyleSheet, Text, TextStyle, View } from 'react-native';
import IconButton from './IconButton';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';

interface ICategoryItem {
  title: string;
  icon: string;
  iconColor?: string;
  bgColor?: string;
  textStyle?: TextStyle;
}

function CategoryItem({
  title,
  icon,
  iconColor,
  bgColor,
  textStyle,
}: ICategoryItem) {
  return (
    <View style={styles.container}>
      <IconButton
        type="ellipse"
        src={icon}
        color={iconColor}
        bgColor={bgColor}
      />
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </View>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.labelsPrimary,
    fontFamily: FONT_FAMILY.regular,
    fontSize: GlobalStyles.fontSize.subhead,
    marginTop: GlobalStyles.spacing.xs,
  },
});
