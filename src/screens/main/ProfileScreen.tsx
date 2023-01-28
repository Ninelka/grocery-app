import { SafeAreaView, Text, View } from 'react-native';
import Button from '../../components/UI/Button';
import { useAuth } from '../../hooks/useAuth';

export default function ProfileScreen() {
  const { logoutHandler } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>This is Profile screen</Text>
      </View>
      <Button onPress={logoutHandler}>Log out</Button>
    </SafeAreaView>
  );
}
