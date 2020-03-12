import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  moment: {
    backgroundColor: '#e6e6e6',
    fontWeight: '600',
    height: 25,
    paddingTop: 4,
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
  },
  location: {
    fontSize: 14,
    margin: 6,
    color: '#999999',
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 10,
  },
  heart: {
    position: 'absolute',
    left: 380,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
