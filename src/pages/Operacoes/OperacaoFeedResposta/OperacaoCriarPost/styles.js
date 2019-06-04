import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics } from '~/styles';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width,
  },
  thumb_post: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding / 2,
    borderBottomColor: colors.lighter,
    borderBottomWidth: 0.5,
  },
  input: {
    marginLeft: metrics.baseMargin,
    fontSize: 16,
    color: colors.black,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: metrics.baseMargin,
    color: colors.primary,
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
});

export default styles;
