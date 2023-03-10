import {
  addFavorite,
  removeFavorite,
  useAppDispatch,
  useAppSelector,
} from '../store/redux';
import { useMemo } from 'react';

export const useFavorites = (productId?: string) => {
  const { idList } = useAppSelector((store) => store.favoriteProducts);
  const dispatch = useAppDispatch();

  const isFavorite = useMemo(() => {
    return idList?.includes(productId);
  }, [idList]);

  const isListEmpty = useMemo(() => {
    return idList.length <= 0;
  }, [idList.length]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(productId));
    } else {
      dispatch(addFavorite(productId));
    }
  };

  return {
    idList,
    isFavorite,
    isListEmpty,
    toggleFavorite,
  };
};
