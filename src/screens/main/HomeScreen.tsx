import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import SmallViewBox from '../../components/UI/SmallViewBox';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../types/stack-navigation';
import { useCategories } from '../../hooks/useCategories';
import CategoryItem from '../../components/UI/CategoryItem';
import { COLORS, GlobalStyles } from '../../constants';

export function HomeScreen() {
  const navigation = useNavigation<StackNavigation>();
  const { categories, isCategoriesLoading } = useCategories();

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
          {!categories && <Text>No any categories</Text>}
          <FlatList
            contentContainerStyle={styles.list}
            data={categories?.slice(0, 4)}
            renderItem={({ item }) => (
              <CategoryItem
                title={item?.title}
                icon={item?.icon}
                // TODO: mix colors
                iconColor={COLORS.primaryGreen}
                bgColor={COLORS.secondaryGreen}
              />
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
  },
  container: {
    padding: GlobalStyles.spacing.s,
  },
  list: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
