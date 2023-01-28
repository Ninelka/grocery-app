import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useCategories } from '../../hooks/useCategories';
import { CategoryItem, SmallViewBox } from '../UI';

interface ICategoriesHomeBlock {
  onSeeAll: () => void;
}

const CategoriesHomeBlock = ({ onSeeAll }: ICategoriesHomeBlock) => {
  const { categories, isCategoriesLoading, getCategoryColors } =
    useCategories();

  return (
    <SmallViewBox title="Categories" onSeeAll={onSeeAll}>
      {isCategoriesLoading && <Text>Loading...</Text>}
      {!categories && !isCategoriesLoading && <Text>No any categories</Text>}
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        data={categories?.slice(0, 4)}
        renderItem={({ item, index }) => (
          <View>
            <CategoryItem
              title={item?.title}
              icon={item?.icon}
              iconColor={getCategoryColors(index)?.icon}
              bgColor={getCategoryColors(index)?.bg}
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
