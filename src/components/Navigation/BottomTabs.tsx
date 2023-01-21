import { BottomTabs } from '../../utils';
import { COLORS, FONT_FAMILY } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import {
  CartScreen,
  FavoriteScreen,
  HomeScreen,
  ProfileScreen,
} from '../../screens/main';

function MainTabs() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontFamily: FONT_FAMILY.regular },
        tabBarActiveTintColor: COLORS.primaryGreen,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default MainTabs;
