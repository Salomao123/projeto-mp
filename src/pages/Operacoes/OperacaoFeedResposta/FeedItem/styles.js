import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics } from '~/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  thumb_user: {
    width,
    padding: metrics.basePadding - 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar_img: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  title: {
    color: colors.darker,
    marginHorizontal: metrics.baseMargin,
  },

  post_media: {
    width,
    height: width,
  },
  details: {
    paddingHorizontal: metrics.baseMargin,
  },
  detailItem: {
    paddingVertical: metrics.basePadding - 17,
    color: colors.darker,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarName: {
    fontWeight: 'bold',
    marginRight: metrics.baseMargin - 5,
    color: colors.darker,
  },
});

export default styles;
