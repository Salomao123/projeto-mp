import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  mandatoBox: {
    borderWidth: 0.5,
    borderColor: colors.regular,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
    backgroundColor: colors.white,
  },
  textDefault: {
    fontSize: 14,
    paddingVertical: metrics.basePadding / 4,
  },
});

export default styles;
