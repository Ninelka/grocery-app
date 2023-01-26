import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';

interface ICard {
  title: string;
  description: string;
  bgImage?: string;
}

const Card = ({ title, description, bgImage }: ICard) => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={{ uri: bgImage }}
        resizeMode="cover"
        style={styles.image}
      >
        <LinearGradient colors={['transparent', COLORS.labelsPrimary]}>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderRadius: GlobalStyles.spacing.xs,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: GlobalStyles.spacing.s,
    width: 285,
    height: 168,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: GlobalStyles.fontSize.title3,
    color: COLORS.white,
  },
  text: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: GlobalStyles.fontSize.subhead,
    color: COLORS.white,
    marginTop: GlobalStyles.spacing.xs,
  },
});
