import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darker,
  },
  icon: {
    fontSize: 20,
    color: colors.darker,
    marginHorizontal: metrics.baseMargin / 2,
  },
  menu: {
    flexDirection: 'row',
    margin: metrics.baseMargin / 2,
  },
});

export default styles;
