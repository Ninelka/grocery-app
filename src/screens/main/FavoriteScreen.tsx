import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';
import { Button, IconButton } from '../../components/UI';
import { useFavorites } from '../../hooks/useFavorites';
import { FavoriteList } from '../../components/Favorite';

const image = require('../../../assets/images/cart.png');

export default function FavoriteScreen() {
  const { isListEmpty } = useFavorites();

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
        {isListEmpty && (
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
        {!isListEmpty && <FavoriteList />}
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
    marginBottom: GlobalStyles.spacing.s,
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
