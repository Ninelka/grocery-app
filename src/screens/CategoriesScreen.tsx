import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useCategories } from '../hooks/useCategories';
import CategoryItem from '../components/UI/CategoryItem';

function CategoriesScreen() {
  const { categories } = useCategories();

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        contentContainerStyle={styles.list}
        numColumns={3}
        keyExtractor={(item) => item.title}
        data={categories}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <CategoryItem title={item?.title} icon={item?.icon} />
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
