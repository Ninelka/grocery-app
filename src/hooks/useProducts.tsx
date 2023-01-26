import { useQuery } from 'react-query';
import { getProducts } from '../../firebase';

export const useProducts = () => {
  const { data: products, isLoading: isProductsLoading } = useQuery(
    'products',
    getProducts
  );

  const countAmountWithDiscount = (amount: number, discount: number) => {
    return amount - (amount * discount) / 100;
  };

  return {
    products,
    isProductsLoading,
    countAmountWithDiscount,
  };
};
