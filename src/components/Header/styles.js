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
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.secundary,
  },
  icon: {
    fontSize: 20,
    color: colors.darker,
    marginHorizontal: metrics.baseMargin / 2,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: metrics.baseMargin / 2,
  },
  eye: {
    flexDirection: 'row',
  },

  containerTitle: {
    alignItems: 'center',
  },

  textPublicar: {
    fontWeight: '400',
    color: colors.primary,
    fontSize: 16,
  },
});

export default styles;
