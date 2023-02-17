import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { useMemo } from 'react';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';
import Badge from '../Badge/Badge';
import IconButton from '../IconButton';
import QuantityButtons from '../QuantityButtons';

export interface IProductCard {
  id: string;
  title: string;
  description?: string;
  unit?: string;
  amount?: number;
  amountWithDiscount?: number;
  image?: ImageSourcePropType;
  discount?: number;
  onPress?: () => void;
  onAddBtnPress?: () => void;
  type?: 'vertical' | 'horizontal' | 'compact';
  onQuantity?: (counter: number) => void;
}

function ProductCard({
  onPress,
  onAddBtnPress,
  type = 'vertical',
  title,
  unit,
  amount,
  amountWithDiscount,
  image,
  discount,
  onQuantity,
}: IProductCard) {
  const cardStyles: ViewStyle = useMemo(() => {
    switch (type) {
      case 'compact':
        return {
          flexDirection: 'row',
          alignItems: 'center',
        };
      case 'horizontal':
        return {
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-between',
        };
    }
  }, [type]);

  const imageStyle = useMemo(() => {
    switch (type) {
      case 'compact':
        return {
          width: GlobalStyles.spacing.xxl,
          height: GlobalStyles.spacing.xxl,
          marginRight: GlobalStyles.spacing.s,
        };
      case 'horizontal':
        return {
          width: 104,
          height: 75,
          marginRight: GlobalStyles.spacing.xs,
        };
      default:
        return {
          width: '100%',
          height: 131,
          marginBottom: 4,
        };
    }
  }, [type]);

  const cardContent = useMemo(() => {
    switch (type) {
      case 'compact':
        return (
          <View style={[styles.row, { alignItems: 'center' }]}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.title, { marginBottom: 0 }]}>{title}</Text>
            </View>
            <IconButton
              size="small"
              bgColor="transparent"
              icon="close-outline"
            />
          </View>
        );
      case 'horizontal':
        return (
          <View
            style={[
              styles.row,
              onQuantity
                ? { flexDirection: 'column' }
                : { flexDirection: 'row' },
            ]}
          >
            <View style={{ flex: 1 }}>
              {discount > 0 && (
                <Badge
                  size="small"
                  counter={`Disc ${discount}%`}
                  style={styles.badge}
                />
              )}
              <Text style={styles.title}>{title}</Text>
              {unit && <Text style={styles.unit}>{unit}</Text>}
            </View>
            {!onQuantity && (
              <View style={styles.amountBlockCol}>
                {discount > 0 && (
                  <Text style={styles.discount}>{`$${amount.toFixed()}`}</Text>
                )}
                <Text
                  style={[
                    styles.amountText,
                    { marginLeft: discount > 0 ? GlobalStyles.spacing.xs : 0 },
                  ]}
                >
                  {discount > 0
                    ? `$${amountWithDiscount.toFixed()}`
                    : `$${amount.toFixed()}`}
                </Text>
              </View>
            )}
            {onQuantity && (
              <View style={styles.amountWrapper}>
                <View style={styles.amountBlockRow}>
                  {discount > 0 && (
                    <Text
                      style={styles.discount}
                    >{`$${amount.toFixed()}`}</Text>
                  )}
                  <Text
                    style={[
                      styles.amountText,
                      {
                        marginLeft: discount > 0 ? GlobalStyles.spacing.xs : 0,
                      },
                    ]}
                  >
                    {discount > 0
                      ? `$${amountWithDiscount.toFixed()}`
                      : `$${amount.toFixed()}`}
                  </Text>
                </View>
                {onQuantity && (
                  <View>
                    <QuantityButtons onQuantity={onQuantity} />
                  </View>
                )}
              </View>
            )}
          </View>
        );
      default:
        return (
          <View>
            <View style={{ flex: 1 }}>
              {discount > 0 && (
                <Badge
                  size="small"
                  counter={`Disc ${discount}%`}
                  style={styles.badge}
                />
              )}
              <Text style={styles.title}>{title}</Text>
              {unit && <Text style={styles.unit}>{unit}</Text>}
            </View>
            <View
              style={[
                styles.row,
                { justifyContent: 'space-between', alignItems: 'center' },
              ]}
            >
              <View style={styles.row}>
                {discount > 0 && (
                  <Text style={styles.discount}>{`$${amount.toFixed()}`}</Text>
                )}
                <Text
                  style={[
                    styles.amountText,
                    { marginLeft: discount > 0 ? GlobalStyles.spacing.xs : 0 },
                  ]}
                >
                  {discount > 0
                    ? `$${amountWithDiscount.toFixed()}`
                    : `$${amount.toFixed()}`}
                </Text>
              </View>
              <IconButton
                size="small"
                color={COLORS.white}
                icon="add"
                onPress={onAddBtnPress}
              />
            </View>
          </View>
        );
    }
  }, [type, title, discount, unit, amount, onQuantity, onAddBtnPress]);

  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          cardStyles,
          pressed && styles.pressed,
        ]}
      >
        {image && (
          <Image
            source={image}
            resizeMode="cover"
            style={[styles.imageWrapper, imageStyle]}
          />
        )}
        {cardContent}
      </Pressable>
    </View>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bgPrimary,
    padding: GlobalStyles.spacing.xs,
    borderRadius: GlobalStyles.spacing.xs,
  },
  imageWrapper: {
    borderRadius: GlobalStyles.spacing.xs,
    backgroundColor: COLORS.grey5,
  },
  badge: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 4,
    marginBottom: GlobalStyles.spacing.xs,
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.labelsPrimary,
    marginBottom: GlobalStyles.spacing.xs,
  },
  unit: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: GlobalStyles.fontSize.footnote,
    color: COLORS.labelsSecondary,
    marginBottom: 4,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  discount: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: GlobalStyles.fontSize.footnote,
    color: COLORS.labelsSecondary,
    textDecorationLine: 'line-through',
    textAlign: 'right',
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  amountBlockCol: {
    alignSelf: 'flex-end',
  },
  amountBlockRow: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  amountText: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.title1,
    color: COLORS.labelsPrimary,
  },
  pressed: {
    opacity: 0.75,
  },
});
