import { useQuery } from 'react-query';
import { getDeals } from '../../firebase';

export const useDeals = () => {
  const { data: deals, isLoading: isDealsLoading } = useQuery(
    'deals',
    getDeals
  );

  return {
    deals,
    isDealsLoading,
  };
};
