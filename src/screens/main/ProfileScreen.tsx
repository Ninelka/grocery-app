import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { version } from './../../../package.json';
import ProfileMenu from '../../components/Profile/ProfileMenu';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ProfileMenu />
        <Text style={styles.version}>{`ver ${version}`}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  version: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.semiBold,
    fontWeight: '600',
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.grey1,
  },
});
