import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';
import Button from './Button';
import { useAppNavigation } from '../../hooks/useAppNavigation';

const image = require('../../../assets/images/cart.png');

interface IEmptyList {
  title: string;
  description: string;
}

export default function EmptyList({ title, description }: IEmptyList) {
  const { showHomePageHandler } = useAppNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <Text style={styles.contentTitle}>{title}</Text>
        <Text style={styles.contentText}>{description}</Text>
      </View>
      <Button size="large" shape="rounded" onPress={showHomePageHandler}>
        Start Shopping
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  contentTitle: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.title1,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: GlobalStyles.spacing.s,
  },
  contentText: {
    fontFamily: FONT_FAMILY.semiBold,
    fontWeight: '600',
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.grey1,
    textAlign: 'center',
  },
});
