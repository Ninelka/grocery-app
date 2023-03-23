import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useProducts } from '../hooks/useProducts';
import { useLayoutEffect, useMemo } from 'react';
import {
  FilterBtn,
  FloatingCard,
  IconButton,
  ProductCard,
  TotalCard,
} from '../components/UI';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../constants';
import { useCart } from '../hooks/useCart';

export default function FilteredProductsScreen({ route, navigation }) {
  const filter = route.params?.filter;
  const {
    filteredProducts,
    countAmountWithDiscount,
    showProductDetailsHandler,
  } = useProducts();
  const {
    addToCartHandler,
    cartItems,
    totalCartAmount,
    summaryText,
    showCartHandler,
  } = useCart();

  const filteredProductsList = useMemo(() => {
    return filteredProducts(filter);
  }, [filteredProducts]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: filter,
      headerRight: () => (
        <View style={styles.header}>
          <IconButton
            size="small"
            icon="search"
            color={COLORS.primaryGreen}
            bgColor="transparent"
          />
        </View>
      ),
    });
  }, [navigation, filter]);

  return (
    <View style={styles.root}>
      {!filteredProductsList.length && (
        <Text>No any products in this category</Text>
      )}
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        data={filteredProductsList}
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
