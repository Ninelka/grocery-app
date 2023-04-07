import { Text, Image, StyleSheet, View } from 'react-native';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';

function IntroSlide({ item }) {
  return (
    <View style={styles.slide}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.text}>{item?.text}</Text>
    </View>
  );
}

export default IntroSlide;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  imageWrapper: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryGreen,
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
    marginBottom: GlobalStyles.spacing.s,
    marginTop: GlobalStyles.spacing.l,
  },
});
