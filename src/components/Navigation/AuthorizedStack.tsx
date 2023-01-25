import { Stack } from '../../utils';
import BottomTabs from './BottomTabs';
import CategoriesScreen from '../../screens/CategoriesScreen';
import SpecialDealsScreen from '../../screens/SpecialDealsScreen';

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
    </Stack.Navigator>
  );
}

export default AuthorizedStack;
