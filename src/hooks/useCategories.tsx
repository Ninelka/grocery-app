import { useQuery } from 'react-query';
// import { COLORS } from '../constants';
import { getCategories } from '../../firebase';

export const useCategories = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useQuery(
    'categories',
    getCategories
  );

  // const colors = () => {
  //   const listOfColors = [
  //     { icon: COLORS.primaryGreen, bg: COLORS.secondaryGreen },
  //     { icon: COLORS.primaryOrange, bg: COLORS.secondaryOrange },
  //     { icon: COLORS.primaryYellow, bg: COLORS.secondaryYellow },
  //     { icon: COLORS.primaryPurple, bg: COLORS.secondaryPurple },
  //     { icon: COLORS.primaryTosca, bg: COLORS.secondaryTosca },
  //   ];
  //
  //   let count = 0;
  //
  //   let index = count % listOfColors.length;
  //
  //   count++;
  //   console.log(listOfColors[index]);
  //   console.log(count);
  //
  //   return listOfColors[index];
  // };

  return {
    categories,
    isCategoriesLoading,
  };
};
