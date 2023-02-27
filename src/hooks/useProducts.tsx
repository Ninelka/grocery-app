import { useQuery } from 'react-query';
import { getProducts } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../types/stack-navigation';

export const useProducts = () => {
  const { data: products, isLoading: isProductsLoading } = useQuery(
    'products',
    getProducts
  );
  const navigation = useNavigation<StackNavigation>();

  const countAmountWithDiscount = (amount: number, discount: number) => {
    return amount - (amount * discount) / 100;
  };

  const showProductDetailsHandler = (product) => {
    navigation.navigate('ProductDetails', {
      productData: product,
    });
  };

  const currentProduct = (id: string) => {
    return products?.find((item) => item.id === id);
  };

  return {
    products,
    isProductsLoading,
    countAmountWithDiscount,
    showProductDetailsHandler,
    currentProduct,
  };
};
