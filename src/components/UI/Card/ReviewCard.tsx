import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export interface IReview {
  username: string;
  stars: number;
  date: Date;
  text: string;
  style?: ViewStyle;
}

const ReviewCard: React.FC<IReview> = ({
  username,
  stars,
  date,
  text,
  style,
}) => {
  const reviewDate = new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <View style={[styles.item, style]}>
      <View style={styles.row}>
        <View style={styles.avatar} />
        <View style={styles.header}>
          <Text style={styles.username}>{username}</Text>
          <View style={styles.starsRow}>
            {Array(stars)
              .fill('')
              .map((item, index) => (
                <Ionicons
                  key={`star-${index}`}
                  name="star"
                  size={16}
                  color="lightblue"
                />
              ))}
            <Text style={styles.date}>{reviewDate}</Text>
          </View>
        </View>
      </View>
      <Text numberOfLines={3} style={styles.reviewText}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.bgPrimary,
    padding: GlobalStyles.spacing.xs,
    borderRadius: 12,
  },
  avatar: {
    width: GlobalStyles.spacing.xxl,
    height: GlobalStyles.spacing.xxl,
    borderRadius: GlobalStyles.spacing.xxl / 2,
    backgroundColor: COLORS.grey5,
  },
  header: {
    marginLeft: GlobalStyles.spacing.s,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.labelsPrimary,
    marginBottom: GlobalStyles.spacing.xs,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  date: {
    marginLeft: GlobalStyles.spacing.xs,
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: GlobalStyles.fontSize.footnote,
    color: COLORS.labelsSecondary,
  },
  reviewText: {
    marginTop: GlobalStyles.spacing.xs,
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: GlobalStyles.fontSize.subhead,
    color: COLORS.labelsSecondary,
  },
});

export default ReviewCard;
