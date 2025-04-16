import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import Toggle from 'react-native-toggle-element';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function SwScreen() {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
  const [isSoundEnabled, setSoundEnabled] = useState(true);
  const [isLocationEnabled, setLocationEnabled] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>⚙️ Configuraciones</Text>

      {/* 1. Switch nativo personalizado */}
      <View style={styles.option}>
        <View style={styles.optionLeft}>
          <Ionicons name="notifications" size={24} color="#6C63FF" />
          <Text style={styles.label}>Notificaciones</Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: "#ccc", true: "#6C63FF" }}
          thumbColor={isNotificationsEnabled ? "#fff" : "#f4f3f4"}
        />
      </View>

      {/* 2. SwitchToggle */}
      <View style={styles.option}>
        <View style={styles.optionLeft}>
          <MaterialCommunityIcons name="weather-night" size={24} color="#6C63FF" />
          <Text style={styles.label}>Modo oscuro</Text>
        </View>
        <SwitchToggle
          switchOn={isDarkModeEnabled}
          onPress={() => setDarkModeEnabled(!isDarkModeEnabled)}
          circleColorOff="#fff"
          circleColorOn="#fff"
          backgroundColorOn="#6C63FF"
          backgroundColorOff="#ccc"
          containerStyle={styles.switchToggleContainer}
          circleStyle={styles.switchToggleCircle}
        />
      </View>

      {/* 3. ToggleElement */}
      <View style={styles.option}>
        <View style={styles.optionLeft}>
          <FontAwesome5 name="volume-up" size={20} color="#6C63FF" />
          <Text style={styles.label}>Sonido</Text>
        </View>
        <Toggle
          value={isSoundEnabled}
          onPress={(newState) => setSoundEnabled(newState)}
          trackBar={{
            activeBackgroundColor: '#6C63FF',
            inActiveBackgroundColor: '#ddd',
            borderActiveColor: '#6C63FF',
            borderInActiveColor: '#aaa',
            borderWidth: 1,
            width: 60,
            height: 30,
          }}
          thumbButton={{
            width: 22,
            height: 22,
            radius: 12,
            activeBackgroundColor: '#fff',
            inActiveBackgroundColor: '#fff',
          }}
        />
      </View>

      {/* 4. Switch nativo default */}
      <View style={styles.option}>
        <View style={styles.optionLeft}>
          <Ionicons name="location-sharp" size={24} color="#6C63FF" />
          <Text style={styles.label}>Ubicación</Text>
        </View>
        <Switch
          value={isLocationEnabled}
          onValueChange={setLocationEnabled}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f0f0f5',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  switchToggleContainer: {
    width: 60,
    height: 30,
    borderRadius: 25,
    padding: 5,
  },
  switchToggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
