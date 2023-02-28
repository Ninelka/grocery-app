import { StyleSheet, View } from 'react-native';
import { COLORS, GlobalStyles } from '../../constants';
import { IconButton } from '../UI';

const ProfileAvatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoIcon}>
        <IconButton
          type="ellipse"
          icon="camera-outline"
          size="small"
          color={COLORS.white}
          bgColor={COLORS.primaryGreen}
        />
      </View>
    </View>
  );
};

export default ProfileAvatar;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: COLORS.grey5,
  },
  photoIcon: {
    position: 'absolute',
    right: -GlobalStyles.spacing.xs,
    bottom: 0,
  },
});
