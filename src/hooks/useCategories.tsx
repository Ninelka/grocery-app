import { useQuery } from 'react-query';
import { COLORS } from '../constants';
import { getCategories } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../types/stack-navigation';

export const useCategories = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useQuery(
    'categories',
    getCategories
  );

  const navigation = useNavigation<StackNavigation>();

  const getCategoryColors = (count = 0) => {
    const listOfColors = [
      { icon: COLORS.primaryGreen, bg: COLORS.secondaryGreen },
      { icon: COLORS.primaryOrange, bg: COLORS.secondaryOrange },
      { icon: COLORS.primaryYellow, bg: COLORS.secondaryYellow },
      { icon: COLORS.primaryPurple, bg: COLORS.secondaryPurple },
      { icon: COLORS.primaryTosca, bg: COLORS.secondaryTosca },
    ];

    let index = count % listOfColors.length;

    let color = listOfColors[index];

    index++;

    return color;
  };

  const showFilteredProductsHandler = (category) => {
    navigation.navigate('FilteredProducts', {
      filter: category,
    });
  };

  return {
    categories,
    isCategoriesLoading,
    getCategoryColors,
    showFilteredProductsHandler,
  };
};
