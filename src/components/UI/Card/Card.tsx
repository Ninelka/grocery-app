import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';

interface ICard {
  title: string;
  description: string;
}

const Card = ({ title, description }: ICard) => {
  return (
    <View style={styles.root}>
      <LinearGradient colors={['transparent', COLORS.labelsPrimary]}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
      </LinearGradient>
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
