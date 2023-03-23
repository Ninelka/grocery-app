import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useCategories } from '../hooks/useCategories';
import { CategoryItem } from '../components/UI';
import { COLORS } from '../constants';

function CategoriesScreen() {
  const { categories, getCategoryColors, showFilteredProductsHandler } =
    useCategories();

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        contentContainerStyle={styles.list}
        numColumns={3}
        keyExtractor={(item) => item.title}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <CategoryItem
                title={item?.title}
                icon={item?.icon}
                iconColor={getCategoryColors(index)?.icon}
                bgColor={getCategoryColors(index)?.bg}
                onPress={() => showFilteredProductsHandler(item?.title)}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgPrimary,
  },
  list: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
