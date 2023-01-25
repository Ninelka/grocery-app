import { StyleSheet, Text, View } from 'react-native';
import Link from '../Link/Link';
import { ReactNode } from 'react';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';

interface ISmallViewBox {
  onSeeAll: () => void;
  children: ReactNode;
  title?: string;
}

function SmallViewBox({ title, onSeeAll, children }: ISmallViewBox) {
  return (
    <View testID="small-view-box-container">
      <View style={styles.header}>
        <Text testID="small-view-box-title" style={styles.title}>
          {title}
        </Text>
        <Link onPress={onSeeAll}>See All</Link>
      </View>
      <View>{children}</View>
    </View>
  );
}

export default SmallViewBox;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: GlobalStyles.spacing.s,
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: GlobalStyles.fontSize.title1,
    color: COLORS.labelsPrimary,
  },
});
