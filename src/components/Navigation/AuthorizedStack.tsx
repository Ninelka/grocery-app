import { Stack } from '../../utils';
import BottomTabs from './BottomTabs';
import CategoriesScreen from '../../screens/CategoriesScreen';
import SpecialDealsScreen from '../../screens/SpecialDealsScreen';
import FeaturedVegetablesScreen from '../../screens/FeaturedVegetablesScreen';

function AuthorizedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="SpecialDeals"
        component={SpecialDealsScreen}
        options={{
          title: 'Special Deals for You',
        }}
      />
      <Stack.Screen
        name="FeaturedVegetables"
        component={FeaturedVegetablesScreen}
        options={{
          title: 'Featured Vegetables',
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthorizedStack;
