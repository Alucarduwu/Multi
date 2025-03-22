import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function SettingsScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings Screen</Text>
            <Button 
                title="Go to Details... again" 
                onPress={() => navigation.push('Details')} 
            />
            <Button 
                title="Go Back" 
                onPress={() => navigation.goBack()} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',  // Corrección del error `aligmentItems`
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    }
});

export default SettingsScreen;
