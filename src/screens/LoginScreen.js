import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation, setIsSignedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingresa tu correo y contraseña');
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor ingresa un correo válido');
    } else {
      // Aquí puedes integrar el login real, como con Firebase o API
      setIsSignedIn(true);
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Ionicons name="lock-closed" size={80} color="white" style={styles.icon} />
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

        {/* Campo de Email */}
        <View style={styles.inputContainer}>
          <Ionicons 
            name="mail-outline" 
            size={24} 
            color="rgba(255,255,255,0.8)" 
            style={styles.inputIcon} 
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="rgba(255,255,255,0.6)"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Campo de Contraseña */}
        <View style={styles.inputContainer}>
          <Ionicons 
            name="key-outline" 
            size={24} 
            color="rgba(255,255,255,0.8)" 
            style={styles.inputIcon} 
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="rgba(255,255,255,0.6)"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons 
              name={showPassword ? "eye-off-outline" : "eye-outline"} 
              size={24} 
              color="rgba(255,255,255,0.8)" 
            />
          </TouchableOpacity>
        </View>

        {/* Botón de Login */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#00c6fb', '#005bea']}
            style={styles.gradient}
          >
            <Ionicons name="log-in" size={24} color="white" />
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Enlaces adicionales */}
        <TouchableOpacity style={styles.footerLink} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerText}>¿No tienes cuenta? </Text>
          <Text style={[styles.footerText, styles.linkText]}>Regístrate</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  icon: {
    marginBottom: 30,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: 'white',
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
    marginLeft: 10,
  },
  button: {
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 20,
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  footerLink: {
    flexDirection: 'row',
    marginTop: 30,
  },
  footerText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  linkText: {
    fontWeight: 'bold',
    color: '#00c6fb',
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    marginTop: 15,
  },
});
