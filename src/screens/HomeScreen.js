import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Botón de menú hamburguesa */}
      <TouchableOpacity
        style={styles.hamburgerButton}
        onPress={() => navigation.toggleDrawer?.()}
        activeOpacity={0.7}
      >
        <Ionicons name="menu" size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Home Screen</Text>

      {/* Botón para ir a ConfigScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Ir a Configuración</Text>
      </TouchableOpacity>

      {/* Botón para ir a SwScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SwScreen')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Ir a Switches</Text>
      </TouchableOpacity>

      {/* Botón opcional para ir a Details con parámetros */}
      <Button
        title="Go to Details with Params"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'Anything you want here',
          })
        }
        color="tomato"
      />

      {/* Botón para ir a Menuh */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menuh')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Ir a Menuh</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: 'tomato',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  hamburgerButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 10,
  },
});

export default HomeScreen;
