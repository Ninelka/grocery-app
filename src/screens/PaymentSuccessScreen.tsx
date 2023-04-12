import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/UI';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../constants';
import { useCart, useAppNavigation } from '../hooks';

const PaymentSuccessScreen = () => {
  const { clearCartHandler } = useCart();
  const { showHomePageHandler } = useAppNavigation();

  const backToMainHandler = () => {
    clearCartHandler();
    showHomePageHandler();
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/online-payment.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Order Successfully</Text>
        <Text style={styles.text}>
          Thank you for the order. Your order will be prepared and shipped by
          courier within 1-2 days
        </Text>
      </View>
      <View style={styles.actionsRow}>
        <View style={styles.payBtn}>
          <Button size="large" shape="rounded" onPress={backToMainHandler}>
            Continue Shopping
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgSecondary,
  },
  container: {
    flex: 1,
    padding: GlobalStyles.spacing.s,
  },
  imageWrapper: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: GlobalStyles.spacing.s,
  },
  text: {
    fontFamily: FONT_FAMILY.semiBold,
    fontWeight: '600',
    fontSize: GlobalStyles.fontSize.subhead,
    color: COLORS.grey2,
    textAlign: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.title1,
    color: COLORS.black,
    textAlign: 'center',
    marginVertical: GlobalStyles.spacing.s,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: GlobalStyles.spacing.s,
  },
  payBtn: {
    flex: 1,
  },
});
