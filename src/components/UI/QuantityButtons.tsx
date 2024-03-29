import IconButton from './IconButton';
import { StyleSheet, View } from 'react-native';
import Input from './Input';
import { useQuantity } from '../../hooks';
import { COLORS, GlobalStyles } from '../../constants';
import { useEffect } from 'react';

interface IQuantityButtons {
  onQuantity?: (counter: number) => void;
  initialQuantity?: number;
}

export default function QuantityButtons({
  onQuantity,
  initialQuantity,
}: IQuantityButtons) {
  const { quantity, decrement, increment, manualChangeQuantity } =
    useQuantity(initialQuantity);

  const setQuantity = () => onQuantity(quantity);

  useEffect(() => {
    setQuantity();
  }, [quantity]);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <IconButton
          isDisabled={quantity < 2}
          icon="remove"
          bgColor={COLORS.grey5}
          color={COLORS.grey1}
          size="extra-small"
          onPress={decrement}
        />
        <View style={styles.quantityContainer}>
          <Input
            value={quantity.toString()}
            keyboardType="numeric"
            size="small"
            inputStyle={styles.quantityInputText}
            inputWrapperStyle={styles.quantityInputWrapper}
            onChangeText={(value) => manualChangeQuantity(+value)}
          />
        </View>
        <IconButton
          icon="add"
          bgColor={COLORS.grey5}
          color={COLORS.grey1}
          size="extra-small"
          onPress={increment}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    marginHorizontal: GlobalStyles.spacing.xs,
  },
  quantityInputWrapper: {
    paddingHorizontal: 10,
  },
  quantityInputText: {
    paddingVertical: 0,
    textAlign: 'center',
  },
});
