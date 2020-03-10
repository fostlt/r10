import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  location: {
    fontSize: 18,
    margin: 6,
    color: '#999999',
    fontWeight: '600',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    margin: 4,
  },
  time: {
    color: '#CF392A',
    margin: 6,
    fontSize: 17,
  },
  description: {
    fontSize: 20,
    margin: 6,
    lineHeight: 28,
    marginBottom: 20,
    fontWeight: "300"
  },
  presented: {
    fontSize: 18,
    margin: 1,
    color: '#999999',
    fontWeight: '600',
  },
  nameTitle: {
    fontSize: 17,
    fontWeight: '600',
    margin: 4,
    marginTop: 30,
    marginLeft: 10,
  },
  speakerContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
  container: {
    margin: 15,
  },
});

export default styles;
