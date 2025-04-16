import React from 'react';
import { CheckBox, Stack, ImageBackground, Box, Center, NativeBaseProvider, FormControl, Text, Checkbox, WarningOutlineIcon, Container } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Config = () => {
    const [groupValue, setGroupValue] = React.useState(["Phone", "Email"]);
    return (
        <Box alignItems="center">
            <Container>
                <FormControl isInvalid>
                    <FormControl.Label _text={{ fontSize: "lg", bold: true }}>
                        Preferred contact method
                    </FormControl.Label>
                    <Text fontSize="md">Selected Values: </Text>
                    <Checkbox.Group
                        mt="2"
                        colorScheme="green"
                        defaultValue={groupValue}
                        accessibilityLabel="choose multiple items"
                        onChange={values => {
                            setGroupValue(values || []);
                        }}
                        alignItems="flex-start"
                    >
                        <Checkbox value="Phone" my="1">Phone</Checkbox>
                        <Checkbox value="Email" my="1">Email</Checkbox>
                        <Checkbox value="Message" my="1">Message</Checkbox>
                        <Checkbox value="Fax" my="1">Fax</Checkbox>
                    </Checkbox.Group>
                    <FormControl.ErrorMessage _stack={{ alignItems: "flex-start" }} leftIcon={<WarningOutlineIcon size="xs" mt={1} />}>
                        You must select at least one method
                    </FormControl.ErrorMessage>
                </FormControl>
            </Container>
        </Box>
    );
};

function ConfigScreen() {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Config />
            </Center>
        </NativeBaseProvider>
    );
}

export default ConfigScreen;
