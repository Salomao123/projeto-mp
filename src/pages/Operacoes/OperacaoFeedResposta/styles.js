import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'column',
    marginTop: metrics.baseMargin,
  },
  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
    paddingVertical: 10,
  },

  infoIcon: {
    color: colors.dark,
  },
  infoText: {
    color: colors.dark,
    fontSize: 16,
    marginLeft: metrics.baseMargin / 2,
  },

  userListContent: {
    marginTop: metrics.baseMargin * 2,
    paddingVertical: metrics.basePadding,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 0.5,
    borderColor: colors.darker,
    borderRadius: metrics.baseRadius,
  },

  button: {
    marginHorizontal: metrics.baseMargin * 2,
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
