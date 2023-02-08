import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useLayoutEffect } from 'react';
import { IProductCard } from '../components/UI/ProductCard/ProductCard';
import {
  Button,
  IconButton,
  ProductDetailsInfo,
  ProductDetailsTabs,
} from '../components/UI';
import { COLORS, GlobalStyles } from '../constants';

export default function ProductDetailsScreen({ route, navigation }) {
  const productData = route.params?.productData;

  const { title, image, description }: IProductCard = productData;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => (
        <View style={styles.headerRightRow}>
          <IconButton
            icon="cart-outline"
            size="small"
            bgColor="transparent"
            color={COLORS.primaryGreen}
          />
          <IconButton
            icon="share-social-outline"
            size="small"
            bgColor="transparent"
            color={COLORS.primaryGreen}
          />
        </View>
      ),
    });
  }, [navigation, title]);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: image?.toString() }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.content}>
          <ProductDetailsInfo {...productData} />
          <ProductDetailsTabs description={description} />
        </View>
      </ScrollView>
      <View style={styles.actionsRow}>
        <View style={styles.iconBtn}>
          <IconButton
            icon="cart-outline"
            size="small"
            color={COLORS.primaryGreen}
            bgColor="transparent"
          />
        </View>
        <View style={styles.buyBtn}>
          <Button size="large" shape="rounded">
            Buy Now
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgPrimary,
  },
  headerRightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flex: 1,
  },
  image: {
    backgroundColor: COLORS.grey5,
    height: '35%',
  },
  content: {
    paddingHorizontal: GlobalStyles.spacing.s,
    paddingTop: GlobalStyles.spacing.s,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.bgPrimary,
    padding: GlobalStyles.spacing.s,
  },
  iconBtn: {
    borderWidth: 1,
    borderRadius: GlobalStyles.spacing.xs,
    borderColor: COLORS.primaryGreen,
  },
  buyBtn: {
    flex: 1,
    marginLeft: GlobalStyles.spacing.s,
  },
});
