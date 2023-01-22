import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SmallViewBox from '../../components/UI/SmallViewBox';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../types/stack-navigation';
import { useCategories } from '../../hooks/useCategories';
import CategoryItem from '../../components/UI/CategoryItem';
import { COLORS, GlobalStyles } from '../../constants';

export function HomeScreen() {
  const navigation = useNavigation<StackNavigation>();
  const { categories, isCategoriesLoading, getCategoryColors } =
    useCategories();

  const seeAllHandler = (path) => {
    navigation.navigate(path);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <SmallViewBox
          title="Categories"
          onSeeAll={() => seeAllHandler('Categories')}
        >
          {isCategoriesLoading && <Text>Loading...</Text>}
          {!categories && !isCategoriesLoading && (
            <Text>No any categories</Text>
          )}
          <FlatList
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgPrimary,
  },
  container: {
    padding: GlobalStyles.spacing.s,
  },
  list: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
