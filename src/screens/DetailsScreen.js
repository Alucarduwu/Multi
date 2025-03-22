import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function DetailsScreen({ route }) {
  const navigation = useNavigation();
  const { itemId, otherParam } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

     
      <Button
        title="Btn details"  
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
        })}
      />

      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {  
          itemId: Math.floor(Math.random() * 100),
          otherParam: 'default' 
        })} 
      />

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />

      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        title="Go Back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default DetailsScreen;