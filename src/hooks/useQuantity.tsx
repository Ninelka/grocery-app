import { useState } from 'react';

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  const manualChangeQuantity = (inputValue: number) => {
    setQuantity(+inputValue);
  };

  return {
    quantity,
    increment,
    decrement,
    manualChangeQuantity,
  };
};
