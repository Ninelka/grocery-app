import {
  Dimensions,
  ImageSourcePropType,
  View,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';
import { useContext } from 'react';
import Constants from 'expo-constants';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button, IntroSlide } from '../components/UI';
import { COLORS, GlobalStyles } from '../constants';
import { AuthContext } from '../store/context/auth-context';

interface IIntroSlideItem {
  title: string;
  text: string;
  image?: ImageSourcePropType;
}

const data: IIntroSlideItem[] = [
  {
    title: 'Fresh Vegetables',
    text: 'Vegetables that are directly picked by farmers\n and guaranteed quality and freshness',
    image: require('../../assets/images/shopping.png'),
  },
  {
    title: 'Easy Shopping',
    text: 'Grab your items only need to order from home,\n click pay and wait for the courier to arrive',
    image: require('../../assets/images/shopping-list.png'),
  },
  {
    title: 'Fast Delivery',
    text: 'Courier will send the groceries you buy in just 1\nday, very fast like a flash!',
    image: require('../../assets/images/delivery.png'),
  },
];

function IntroSliderScreen() {
  const authCtx = useContext(AuthContext);
  const setOnboardingDoneHandler = () => {
    authCtx.saveOnboardingMark(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <AppIntroSlider
        bottomButton
        showSkipButton
        showDoneButton
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        keyExtractor={(item) => item.title}
        renderSkipButton={() => <Text style={styles.buttonSkip}>Skip</Text>}
        onSkip={setOnboardingDoneHandler}
        renderNextButton={() => (
          <Button
            onPress={setOnboardingDoneHandler}
            style={styles.nextBtn}
            shape="rounded"
            size="large"
          >
            Get Started
          </Button>
        )}
        renderDoneButton={() => (
          <Button
            onPress={setOnboardingDoneHandler}
            style={styles.nextBtn}
            shape="rounded"
            size="large"
          >
            Get Started
          </Button>
        )}
        renderItem={IntroSlide}
        data={data}
      />
    </View>
  );
}

export default IntroSliderScreen;

const getSkipBtnTopPosition = () => {
  if (Platform.OS === 'ios') {
    return Dimensions.get('window').height - Constants.statusBarHeight - 70;
  } else {
    return Dimensions.get('window').height - 70;
  }
};

const styles = StyleSheet.create({
  buttonSkip: {
    position: 'absolute',
    bottom: getSkipBtnTopPosition(),
    right: 0,
  },
  dot: {
    width: GlobalStyles.spacing.xs,
    height: GlobalStyles.spacing.xs,
    backgroundColor: COLORS.fillsPrimary,
  },
  activeDot: {
    width: 40,
    height: GlobalStyles.spacing.xs,
    backgroundColor: COLORS.primaryGreen,
  },
  nextBtn: {
    width: '100%',
  },
});
