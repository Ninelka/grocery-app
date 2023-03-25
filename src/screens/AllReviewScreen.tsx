import { FlatList, StyleSheet, View } from 'react-native';
import { ReviewCard } from '../components/UI';
import { GlobalStyles } from '../constants';

const AllReviewScreen = ({ route }) => {
  const { reviews } = route.params;

  return (
    <View style={styles.root}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={reviews}
        renderItem={({ item }) => (
          <ReviewCard
            style={styles.reviewCard}
            username={item.username}
            stars={item.stars}
            date={item.date}
            text={item.text}
          />
        )}
      />
    </View>
  );
};

export default AllReviewScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: GlobalStyles.spacing.s,
  },
  reviewCard: {
    marginBottom: GlobalStyles.spacing.s,
  },
});
