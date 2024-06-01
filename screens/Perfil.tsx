import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Icon type='font-awesome' name='star' />
        <Text>Puntaje </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon type='font-awesome' name='bell' />
        <Text>Notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon type='font-awesome' name='history' />
        <Text>Historial de Soluciones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon type='font-awesome' name='question-circle' />
        <Text>Ayuda y Soporte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon type='font-awesome' name='sign-out' />
        <Text>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default Perfil;
