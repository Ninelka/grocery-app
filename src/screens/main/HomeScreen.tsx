import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { COLORS, GlobalStyles } from '../../constants';
import {
  CategoriesHomeBlock,
  FeaturedVegetablesHomeScreen,
  SpecialDealsHomeBlock,
} from '../../components/HomeBlocks';
import { useAppNavigation } from '../../hooks/useAppNavigation';

export default function HomeScreen() {
  const { seeAllHandler } = useAppNavigation();

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
