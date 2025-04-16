import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, useColorMode, useColorModeValue, Center, Box } from 'native-base';

function UseColorMode() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('Light', 'Dark');
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');

  return (
    <Center>
      <Box p="4" flex="1" bg={bg} maxW="300" w="100%" mt={10} safeArea>
        <Text fontSize="lg" mb={20}>
          The active color mode is{' '}
          <Text bold fontSize="18px">
            {text}
          </Text>
        </Text>
        <Button onPress={toggleColorMode} h={10}>
          Toggle
        </Button>
      </Box>
    </Center>
  );
}

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <UseColorMode />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SettingsScreen;
