import { View, Text, TextInput, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import axios from 'axios';
import Input from "../components/input";
import { showMessage } from "react-native-flash-message";

export default function Login(props) {
    const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (text) => {
        setEmail(text);
    };
    const handlePassword = (text) => {
        setPassword(text);
    };
    const irRegister = () => {
        navigation.navigate("Register")
    };
    const submit = async () => {
        try{
        const request = await axios.post("https://api-nodejs-todolist.herokuapp.com/user/login", {
            email,
            password,
        });
        const { name } = request.data.user;
        const { token } = request.data;
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("token", token);
        navigation.navigate("Home");
    }catch(e) {
        showMessage({
            message:"Ha ocurrido un error",
            type: "info",
            duration: 2500
        })
    }};

    return (
        <View style={styles.container}>
            <View style={styles.container2}>

                <View style={styles.containerText}>
                    <Text style={styles.welcome}>Welcome Back!</Text>
                    <Image
                        source={require("../assets/login.png")}
                        style={styles.imageLogin}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Input
                        style={styles.input}
                        onChangeText={handleEmail}
                        value={email}
                        placeholder="Enter your e-mail" />
                    <Input
                        style={styles.input}
                        onChangeText={handlePassword}
                        value={password}
                        placeholder="Enter password" />
                </View>
                <Button
                    title="Login"
                    onPress={submit}
                />
                <Text style={styles.text}>
                    Don't have an account?
                    <Text style={styles.textLogin} onPress={irRegister}>
                        {" "}
                        Sign Up
                    </Text>{" "}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    container2: {
        backgroundColor: "#EDEDEE",
        width: "90%",
        height: "95%",
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: "column",
    },
    image: {
        marginHorizontal: -120,
        marginVertical: -100,
        position: "relative",
    },
    imageLogin: {
        width: 120,
        height: 150,
    },
    containerText: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    welcome: {
        fontWeight: "800",
        fontSize: 20,
        marginBottom: 20,
        color: "black"
    },

    text: {
        marginTop: 20,
        textAlign: "center",
        marginBottom: 10,
        color: "black"

    },
    containerInput: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },
    textLogin: {
        color: "#50C2C9",
        marginBottom: 20,
        marginTop: 50,
        fontWeight: "500",
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
    },
});
