import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  warnning: {
    paddingVertical: metrics.basePadding,
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.secundary,
    alignItems: 'center',
  },

  textWarnning: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
