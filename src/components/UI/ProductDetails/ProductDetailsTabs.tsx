import { StyleSheet, Text, View } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useState } from 'react';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';

const segmentsData = ['Detail Items', 'Reviews'];

export default function ProductDetailsTabs() {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);

  return (
    <View style={styles.root}>
      <SegmentedControl
        values={segmentsData}
        selectedIndex={activeSegmentIndex}
        fontStyle={styles.segmentFontStyle}
        onChange={(event) =>
          setActiveSegmentIndex(event.nativeEvent.selectedSegmentIndex)
        }
      />
      {activeSegmentIndex === 0 && (
        <View>
          <Text>Details items</Text>
        </View>
      )}
      {activeSegmentIndex === 1 && (
        <View>
          <Text>Reviews</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: GlobalStyles.spacing.l,
  },
  segmentFontStyle: {
    fontFamily: FONT_FAMILY.semiBold,
    fontWeight: '600',
    fontSize: GlobalStyles.fontSize.subhead,
    color: COLORS.black,
  },
});
