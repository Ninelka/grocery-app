import { useQuery } from 'react-query';
import { COLORS } from '../constants';
import { getCategories } from '../../firebase';

export const useCategories = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useQuery(
    'categories',
    getCategories
  );

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

  return {
    categories,
    isCategoriesLoading,
    getCategoryColors,
  };
};
