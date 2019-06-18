import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  content: {
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
