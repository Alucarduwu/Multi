import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function DetailsScreen({ route }) {
  const navigation = useNavigation();
  
  // Extracción de parámetros de la ruta
  const { itemId = "No ID", otherParam = "No Param" } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      {/* Botones para la navegación */}
      <Button
        title="Go to Details again with random itemId"
        onPress={() => 
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <Button
        title="Go to Details with otherParam"
        onPress={() => 
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: 'default'
          })
        }
      />

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />

      <Button
        title="Go Home"
        onPress={() => navigation.navigate('HomeTab')}
      />

      <Button
        title="Go Back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default DetailsScreen;
