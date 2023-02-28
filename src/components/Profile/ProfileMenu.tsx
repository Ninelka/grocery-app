import { ScrollView, StyleSheet } from 'react-native';
import ProfileMenuItem from './ProfileMenuItem';
import { COLORS, GlobalStyles } from '../../constants';
import { useAuth } from '../../hooks/useAuth';

const ProfileMenu = () => {
  const { logoutHandler } = useAuth();

  return (
    <ScrollView>
      <ProfileMenuItem
        title="My Profile"
        iconName="person-circle-outline"
        iconColor={COLORS.primaryGreen}
        iconBgColor={COLORS.secondaryGreen}
        withArrow={true}
        style={styles.item}
      />
      <ProfileMenuItem
        title="My Address"
        iconName="map-outline"
        iconColor={COLORS.primaryTosca}
        iconBgColor={COLORS.secondaryTosca}
        withArrow={true}
        style={styles.item}
      />
      <ProfileMenuItem
        title="Notification"
        iconName="notifications-outline"
        iconColor={COLORS.primaryYellow}
        iconBgColor={COLORS.secondaryYellow}
        withArrow={true}
        style={styles.item}
      />
      <ProfileMenuItem
        title="Help center"
        iconName="shield-checkmark-outline"
        iconColor={COLORS.primaryPurple}
        iconBgColor={COLORS.secondaryPurple}
        withArrow={true}
        style={styles.item}
      />
      <ProfileMenuItem
        title="Log Out"
        iconName="chevron-forward"
        iconColor={COLORS.primaryOrange}
        iconBgColor={COLORS.secondaryOrange}
        onPress={logoutHandler}
      />
    </ScrollView>
  );
};

export default ProfileMenu;

const styles = StyleSheet.create({
  item: {
    marginBottom: GlobalStyles.spacing.s,
  },
});
