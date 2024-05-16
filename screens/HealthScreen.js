import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';




const HealthScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Todavía no hay ningún recordatorio. ¡Pulsa "+" para agregar uno!
      </Text>
    </View>
  );
};



export default HealthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
  imagen: {
    width: 100,
    height: 100,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
});