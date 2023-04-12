import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDeals } from '../../hooks';
import { GlobalStyles } from '../../constants';
import { Card, SmallViewBox } from '../UI';

const SpecialDealsHomeBlock = ({ onSeeAll }) => {
  const { deals, isDealsLoading } = useDeals();

  return (
    <SmallViewBox title="Special Deals for You" onSeeAll={onSeeAll}>
      {isDealsLoading && <Text>Loading...</Text>}
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={deals}
        ListEmptyComponent={<Text>No any deals</Text>}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.deals,
              index === deals?.length - 1 && { marginRight: 0 },
            ]}
          >
            <Card
              title={item?.title}
              description={item?.description}
              bgImage={item?.imageUrl}
            />
          </View>
        )}
        horizontal={true}
      />
    </SmallViewBox>
  );
};

export default SpecialDealsHomeBlock;

const styles = StyleSheet.create({
  deals: {
    marginRight: GlobalStyles.spacing.s,
  },
});
