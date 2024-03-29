import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useProducts, useCart, useAppNavigation } from '../hooks';
import { useLayoutEffect, useMemo } from 'react';
import {
  FilterBtn,
  FloatingCard,
  IconButton,
  ProductCard,
  TotalCard,
} from '../components/UI';
import { COLORS, GlobalStyles } from '../constants';

export default function FilteredProductsScreen({ route, navigation }) {
  const filter = route.params?.filter;
  const { filteredProducts, countAmountWithDiscount } = useProducts();
  const { addToCartHandler, cartItems, totalCartAmount, summaryText } =
    useCart();
  const { showCartHandler, showProductDetailsHandler } = useAppNavigation();

  const filteredProductsList = useMemo(() => {
    return filteredProducts(filter);
  }, [filteredProducts]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: filter,
      headerRight: () => (
        <IconButton
          size="small"
          icon="search"
          color={COLORS.primaryGreen}
          bgColor="transparent"
        />
      ),
    });
  }, [navigation, filter]);

  return (
    <View style={styles.root}>
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        data={filteredProductsList}
        ListEmptyComponent={<Text>No any products in this category</Text>}
        renderItem={({ item, index }) => (
          <View
            key={index.toString()}
            style={[
              styles.item,
              index % 2 !== 0 && { marginRight: 0 },
              index >= filteredProductsList?.length - 2 && { marginBottom: 0 },
            ]}
          >
            <ProductCard
              id={item?.id}
              onPress={() => showProductDetailsHandler(item)}
              title={item?.title}
              unit={item?.unit}
              amount={item?.amount}
              discount={item?.discount}
              amountWithDiscount={countAmountWithDiscount(
                item?.amount,
                item?.discount
              )}
              image={{ uri: item?.image }}
              onAddBtnPress={() => addToCartHandler(item?.id, 1)}
            />
          </View>
        )}
      />
      {cartItems.length > 0 && (
        <FloatingCard
          position="bottom"
          withShadow={true}
          style={styles.summaryCard}
        >
          <TotalCard
            isSummary
            summaryAmount={totalCartAmount}
            summaryText={summaryText}
            counter={cartItems.length}
            onPress={showCartHandler}
          />
        </FloatingCard>
      )}
      {cartItems.length === 0 && (
        <FloatingCard
          type="ellipse"
          position="bottom-center"
          withShadow={true}
          style={styles.filterBtn}
        >
          <FilterBtn />
        </FloatingCard>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgSecondary,
    padding: GlobalStyles.spacing.s,
  },
  item: {
    flex: 1,
    marginRight: GlobalStyles.spacing.xs,
    marginBottom: GlobalStyles.spacing.s,
  },
  summaryCard: {
    backgroundColor: COLORS.primaryGreen,
  },
  filterBtn: {
    width: 172,
  },
});
