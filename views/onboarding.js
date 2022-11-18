import React from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

function Onboarding ({navigation }) {
    const irRegister = () => {
        navigation.navigate("Register")};

    return (
        <View style={styles.container}>
            <Image style={styles.onboarding}
                source={require('../assets/onboarding.png')}
            />
            <Text style={styles.title}>Gets things done whit TODo</Text>
            <Text style={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in volutpat,
                tristique lacinia ut. Elementum non turpis nullam ipsum.</Text>
            <Button
                title="Get Started"
                onPress={irRegister}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column'
    },
    onboarding: {
        alignItems: 'center',
        height: 200,
        width: 200,
        marginTop: -50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    },
    parrafo: {
        color: 'black',
        fontSize: 18,
        margin: 30,
        justifyContent: 'center'
    }
});

export default Onboarding;