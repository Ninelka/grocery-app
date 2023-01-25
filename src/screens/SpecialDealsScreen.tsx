import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDeals } from '../hooks/useDeals';
import Card from '../components/UI/Card/Card';
import { COLORS, GlobalStyles } from '../constants';

function SpecialDealsScreen() {
  const { deals, isDealsLoading } = useDeals();

  return (
    <View style={styles.root}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={deals}
        renderItem={({ item, index }) => (
          <View
            key={item.key}
            style={[
              styles.list,
              index === deals.length - 1 && { marginBottom: 0 },
            ]}
          >
            <Card
              title={item?.title}
              description={item?.description}
              bgImage={item?.imageUrl}
            />
          </View>
        )}
      />
      {!deals && !isDealsLoading && <Text>There is no deals</Text>}
    </View>
  );
}

export default SpecialDealsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgPrimary,
    padding: GlobalStyles.spacing.s,
    gap: GlobalStyles.spacing.s,
  },
  list: {
    marginBottom: GlobalStyles.spacing.s,
  },
});
