import { Stack } from '../../utils';
import BottomTabs from './BottomTabs';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';
import {
  AllReviewScreen,
  CategoriesScreen,
  CheckoutScreen,
  FeaturedVegetablesScreen,
  FilteredProductsScreen,
  IntroSliderScreen,
  OrderSummaryScreen,
  ProductDetailsScreen,
  SpecialDealsScreen,
} from '../../screens';
import { useContext } from 'react';
import { AuthContext } from '../../store/context/auth-context';

function AuthorizedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: COLORS.primaryGreen,
        headerTitleStyle: {
          color: COLORS.black,
          fontFamily: FONT_FAMILY.semiBold,
          fontWeight: '600',
          fontSize: GlobalStyles.fontSize.headline,
        },
      }}
    >
      {!authCtx.isOnboardingDone && (
        <Stack.Screen
          name="IntroSliderScreen"
          component={IntroSliderScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
      {authCtx.isOnboardingDone && (
        <>
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
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
          />
          <Stack.Screen
            name="OrderSummary"
            component={OrderSummaryScreen}
            options={{
              title: 'Order Summary',
            }}
          />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen
            name="FilteredProducts"
            component={FilteredProductsScreen}
          />
          <Stack.Screen
            name="AllReviews"
            component={AllReviewScreen}
            options={{
              title: 'All Reviews',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default AuthorizedStack;
