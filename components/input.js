import { TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input(props) {
    return (
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        onChangeText={props.function}
      />
    );
  }
  const styles = StyleSheet.create({
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
  })