import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/UI/Button';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';
import IconButton from '../../components/UI/IconButton';

const image = require('../../../assets/images/cart.png');

export function FavoriteScreen() {
  const favoriteList = [];

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>My Favorite</Text>
          {/* TODO: replace to search component */}
          <IconButton
            size="small"
            icon="search"
            color={COLORS.primaryGreen}
            bgColor="transparent"
          />
        </View>
        {!favoriteList.length && (
          <View style={{ flex: 1 }}>
            <View style={styles.content}>
              <Image source={image} style={styles.image} />
              <Text style={styles.contentTitle}>
                Oops your wishlist is empty!
              </Text>
              <Text style={styles.contentText}>
                {`It seems nothing in here. Explore more\n and shortlist some item.`}
              </Text>
            </View>
            <Button size="large" shape="rounded">
              Start Shopping
            </Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgPrimary,
  },
  container: {
    flex: 1,
    padding: GlobalStyles.spacing.s,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTitle: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: GlobalStyles.fontSize.title1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
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
