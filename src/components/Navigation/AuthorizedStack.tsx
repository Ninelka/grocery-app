import { Stack } from '../../utils';
import BottomTabs from './BottomTabs';
import CategoriesScreen from '../../screens/CategoriesScreen';
import PopularDealsScreen from '../../screens/PopularDealsScreen';

function AuthorizedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name="PopularDeals" component={PopularDealsScreen} />
    </Stack.Navigator>
  );
}

export default AuthorizedStack;
