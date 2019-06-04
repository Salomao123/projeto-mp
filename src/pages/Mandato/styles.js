import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  mandatoBox: {
    borderWidth: 0.5,
    borderColor: colors.darker,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
    backgroundColor: colors.white
  },
});

export default styles;
