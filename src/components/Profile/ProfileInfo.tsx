import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../store/context/auth-context';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';
import ProfileAvatar from './ProfileAvatar';

const ProfileInfo = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <View style={styles.root}>
      <ProfileAvatar />
      {userInfo && (
        <>
          <Text style={styles.name}>{userInfo.name}</Text>
          <Text style={styles.email}>{userInfo.email}</Text>
        </>
      )}
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.bold,
    fontSize: GlobalStyles.fontSize.title1,
    marginTop: GlobalStyles.spacing.s,
  },
  email: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.semiBold,
    fontWeight: '600',
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.grey1,
    marginTop: GlobalStyles.spacing.xs,
  },
});
