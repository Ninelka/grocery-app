import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../types/stack-navigation';
import { BottomTabNavigation } from '../types/bottom-tabs-navigation';

export const useAppNavigation = () => {
  const stackNavigation = useNavigation<StackNavigation>();
  const bottomTabNavigation = useNavigation<BottomTabNavigation>();

  const seeAllHandler = (path) => {
    stackNavigation.navigate(path);
  };

  const showOrderSummaryHandler = () => {
    stackNavigation.navigate('OrderSummary');
  };

  const showOrderCheckoutHandler = () => {
    stackNavigation.navigate('Checkout');
  };

  const paymentSuccessHandler = () => {
    stackNavigation.navigate('PaymentSuccess');
  };

  const openAllReviewsHandler = (reviews) => {
    stackNavigation.navigate('AllReviews', {
      reviews,
    });
  };

  const showProductDetailsHandler = (product) => {
    stackNavigation.navigate('ProductDetails', {
      productData: product,
    });
  };

  const showFilteredProductsHandler = (category) => {
    stackNavigation.navigate('FilteredProducts', {
      filter: category,
    });
  };

  const showCartHandler = () => {
    bottomTabNavigation.navigate('Cart');
  };

  const showHomePageHandler = () => {
    bottomTabNavigation.navigate('Home');
  };

  return {
    seeAllHandler,
    showOrderSummaryHandler,
    showOrderCheckoutHandler,
    paymentSuccessHandler,
    showCartHandler,
    showHomePageHandler,
    openAllReviewsHandler,
    showProductDetailsHandler,
    showFilteredProductsHandler,
  };
};
