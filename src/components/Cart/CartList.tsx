import { FlatList, View } from 'react-native';
import { ProductCard } from '../UI';
import { useCart } from '../../hooks/useCart';
import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { GlobalStyles } from '../../constants';

export default function CartList() {
  const { cartItems } = useCart();
  const { countAmountWithDiscount } = useProducts();
  const [productCount, setProductCount] = useState(1);

  return (
    <FlatList
      keyExtractor={(item) => item.productData.id}
      data={cartItems}
      renderItem={({ item, index }) => (
        <View
          style={{
            marginBottom:
              index === cartItems.length - 1 ? 0 : GlobalStyles.spacing.s,
          }}
        >
          <ProductCard
            {...item.productData}
            amountWithDiscount={countAmountWithDiscount(
              item?.productData?.amount,
              item?.productData?.discount
            )}
            image={{ uri: item?.productData?.image as string }}
            type="horizontal"
            withQuantity={true}
            onQuantity={(counter) => setProductCount(counter)}
          />
        </View>
      )}
    />
  );
}
