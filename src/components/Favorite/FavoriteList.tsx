import { FlatList } from 'react-native';
import FavoriteItem from './FavoriteItem';
import { useFavorites, useProducts } from '../../hooks';
import { useMemo } from 'react';

function FavoriteList() {
  const { idList } = useFavorites();
  const { products } = useProducts();

  const favoriteProducts = useMemo(() => {
    return products.filter((item) => idList.includes(item.id));
  }, [idList]);

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={favoriteProducts}
      renderItem={({ item }) => <FavoriteItem item={item} />}
    />
  );
}

export default FavoriteList;
