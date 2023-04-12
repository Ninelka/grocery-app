import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useCategories } from '../../hooks/useCategories';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { CategoryItem, SmallViewBox } from '../UI';

interface ICategoriesHomeBlock {
  onSeeAll: () => void;
}

const CategoriesHomeBlock = ({ onSeeAll }: ICategoriesHomeBlock) => {
  const { categories, isCategoriesLoading, getCategoryColors } =
    useCategories();
  const { showFilteredProductsHandler } = useAppNavigation();

  return (
    <SmallViewBox title="Categories" onSeeAll={onSeeAll}>
      {isCategoriesLoading && <Text>Loading...</Text>}
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        data={categories?.slice(0, 4)}
        ListEmptyComponent={<Text>No any categories</Text>}
        renderItem={({ item, index }) => (
          <View>
            <CategoryItem
              title={item?.title}
              icon={item?.icon}
              iconColor={getCategoryColors(index)?.icon}
              bgColor={getCategoryColors(index)?.bg}
              onPress={() => showFilteredProductsHandler(item?.title)}
            />
          </View>
        )}
        horizontal={true}
      />
    </SmallViewBox>
  );
};

export default CategoriesHomeBlock;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
