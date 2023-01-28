import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StackNavigation } from '../../types/stack-navigation';
import { COLORS, GlobalStyles } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import {
  CategoriesHomeBlock,
  FeaturedVegetablesHomeScreen,
  SpecialDealsHomeBlock,
} from '../../components/HomeBlocks';

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigation>();

  const seeAllHandler = (path) => {
    navigation.navigate(path);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <CategoriesHomeBlock onSeeAll={() => seeAllHandler('Categories')} />
        <SpecialDealsHomeBlock onSeeAll={() => seeAllHandler('SpecialDeals')} />
        <FeaturedVegetablesHomeScreen
          onSeeAll={() => seeAllHandler('FeaturedVegetables')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgSecondary,
  },
  container: {
    flex: 1,
    padding: GlobalStyles.spacing.s,
  },
});
