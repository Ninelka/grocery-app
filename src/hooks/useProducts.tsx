import { useQuery } from 'react-query';
import { getProducts } from '../../firebase';

export const useProducts = () => {
  const { data: products, isLoading: isProductsLoading } = useQuery(
    'products',
    getProducts
  );

  return {
    products,
    isProductsLoading,
  };
};
