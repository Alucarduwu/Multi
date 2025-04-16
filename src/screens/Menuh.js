import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importar el DrawerNavigator

// Importar pantallas
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ConfigScreen from './ConfigScreen';

// Crear los navegadores
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator(); // Declarar el DrawerNavigator

// Configuración del Tab Navigator
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'tomato' },
      headerTintColor: '#fff',
      tabBarActiveTintColor: 'tomato',
    }}
  >
    <Tab.Screen 
      name="Home"  
      component={HomeScreen}
      options={{ title: 'Inicio' }} 
    />
    <Tab.Screen 
      name="Config"  
      component={ConfigScreen}
      options={{ title: 'Config' }} 
    />
    <Tab.Screen 
      name="Details" 
      component={DetailsScreen}
      options={{ title: 'Detalles' }} 
    />
    <Tab.Screen 
      name="Settings" 
      component={SettingsScreen}
      options={{ title: 'Configuración' }} 
    />
  </Tab.Navigator>
);

// Configuración del Drawer Navigator
const MenuDrawer = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ title: 'Inicio' }} 
    />
    <Drawer.Screen 
      name="Details" 
      component={DetailsScreen} 
      options={{ title: 'Detalles' }} 
    />
    <Drawer.Screen 
      name="Settings" 
      component={SettingsScreen} 
      options={{ title: 'Configuración' }} 
    />
  </Drawer.Navigator>
);

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="MenuDrawer"
            component={MenuDrawer} // Agregar el Drawer como pantalla principal
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {(props) => <LoginScreen {...props} setIsSignedIn={setIsSignedIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
