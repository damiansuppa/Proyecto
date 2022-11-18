import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Button
} from 'react-native';
import { showMessage } from "react-native-flash-message";


function Register({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleName = ()=>{
        setName()
    };
    const handleEmail = ()=>{
        setEmail()
    };
    const handlePassword = ()=>{
        setPassword
    };
    const handlePasswordConfirm = ()=>{
        setPasswordConfirm
    };
    const irLogin = () => {
        navigation.navigate("Login")
    };
    const submit = async () => {
        if (name && email && password === passwordConfirm) {
          const request = await axios.post("https://api-nodejs-todolist.herokuapp.com/user/register", {
            name,
            email,
            password,
          });
          setName("");
          setEmail("");
          setPassword("");
    
          const { token } = request.data;
          await AsyncStorage.setItem("token", token);
          showMessage({
            message: "Te has registrado correctamente",
            type: "info",
          });
    
          navigation.navigate("Home");
        } else {
          showMessage({
            message: "Ha ocurrido un error",
            type: "warning",
          });
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.Welcome}>Welcome Onboard</Text>
            <Text style={styles.Text}>Let's help you meet up your tasks</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleName}
                value={name}
                placeholder="Enter your full name" />
            <TextInput
                style={styles.input}
                onChangeText={handleEmail}
                value={email}
                placeholder="Enter your e-mail" />
            <TextInput
                style={styles.input}
                onChangeText={handlePassword}
                value={password}
                placeholder="Enter password" />
            <TextInput
                style={styles.input}
                onChangeText={handlePasswordConfirm}
                value={passwordConfirm}
                placeholder="Confirm password" />
            <Button
                title="Register"
                onPress={submit} />
            <View>
                <Text style={styles.Text}>
                    Already have an account?
                    <Text style={styles.TextLogin} onPress={irLogin}>
                        {" "}
                        Sign In
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDEDEE",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Welcome: {
        fontWeight: "800",
        fontSize: 20,
        marginBottom: 20,
        color: "black"
    },
    Text: {
        marginTop: 20,
        textAlign: "center",
        marginBottom: 10,
        color: "black"
    },
    TextLogin:{
        marginTop: 20,
        textAlign: "center",
        marginBottom: 10,
        color: "blue"
    },
    input: {
        textShadowColor: "white",
        backgroundColor: "black",
        width: "90%",
        height: 60,
        marginHorizontal: 15,
        padding: 5,
        borderRadius: 30,
        fontSize: 15,
        fontWeight: "400",
        marginTop: 20,
        textAlign: "center",
    }
});

export default Register;