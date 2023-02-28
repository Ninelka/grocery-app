import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { version } from './../../../package.json';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';
import { ProfileInfo, ProfileMenu } from '../../components/Profile';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <ProfileInfo />
        <View style={styles.divider}></View>
        <ProfileMenu />
        <Text style={styles.version}>{`ver ${version}`}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgSecondary,
  },
  content: {
    flex: 1,
    padding: GlobalStyles.spacing.s,
  },
  divider: {
    flex: 1,
    minHeight: 2,
    maxHeight: 2,
    backgroundColor: COLORS.grey5,
    marginVertical: GlobalStyles.spacing.m,
  },
  version: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.semiBold,
    fontWeight: '600',
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.grey1,
    marginTop: GlobalStyles.spacing.s,
  },
});
