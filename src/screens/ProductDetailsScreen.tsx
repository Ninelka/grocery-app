import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useLayoutEffect, useState } from 'react';
import { IProductCard } from '../components/UI/ProductCard/ProductCard';
import {
  Button,
  IconButton,
  ProductDetailsInfo,
  ProductDetailsTabs,
} from '../components/UI';
import { COLORS, GlobalStyles } from '../constants';
import { useCart } from '../hooks/useCart';
import { useAppNavigation } from '../hooks/useAppNavigation';

export default function ProductDetailsScreen({ route, navigation }) {
  const { addToCartHandler } = useCart();
  const productData = route.params?.productData;
  const { title, image, description, reviews }: IProductCard = productData;

  const [productQuantity, setProductQuantity] = useState(1);
  const { showCartHandler } = useAppNavigation();

  const changeProductQuantity = (props) => {
    setProductQuantity(props);
  };

  const buyNowBtnHandler = (counter: number) => {
    addToCartHandler(productData.id, counter);
    showCartHandler();
  };

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
            onPress={() => addToCartHandler(productData.id, productQuantity)}
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
      <View style={styles.container}>
        <Image
          source={{ uri: image?.toString() }}
          resizeMode="cover"
          style={styles.image}
        />
        <ScrollView>
          <View style={styles.content}>
            <ProductDetailsInfo
              {...productData}
              initialQuantity={productQuantity}
              onChangeProductQuantity={changeProductQuantity}
            />
            <ProductDetailsTabs description={description} reviews={reviews} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.actionsRow}>
        <View style={styles.iconBtn}>
          <IconButton
            icon="cart-outline"
            size="small"
            color={COLORS.primaryGreen}
            bgColor="transparent"
            onPress={() => addToCartHandler(productData.id, productQuantity)}
          />
        </View>
        <View style={styles.buyBtn}>
          <Button
            size="large"
            shape="rounded"
            onPress={() => buyNowBtnHandler(productQuantity)}
          >
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
    backgroundColor: COLORS.bgSecondary,
  },
  headerRightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  image: {
    backgroundColor: COLORS.grey5,
    height: '35%',
  },
  content: {
    flex: 1,
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
