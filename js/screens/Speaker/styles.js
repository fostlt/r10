import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  container: {
    margin: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 40,
    marginBottom: 20
  },
  bio: {
    fontSize: 18
  },
  button: {
    backgroundColor: '#9963ea', 
    borderRadius: 30,
    width: 250,
    height: 50,
    marginTop: 20
  },
  buttonText: {
      color: "white",
      fontSize: 20,
      textAlign: "center",
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12
  }
});

export default styles;
