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

  const currentProduct = (id: string) => {
    return products?.find((item) => item.id === id);
  };

  const filteredProducts = (filter: string) => {
    return products?.filter((item) => item.category === filter);
  };

  return {
    products,
    isProductsLoading,
    countAmountWithDiscount,
    currentProduct,
    filteredProducts,
  };
};
