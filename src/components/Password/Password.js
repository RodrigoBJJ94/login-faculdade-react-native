import React from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "./Styles";

export default function Password({ setPassword }) {
    return (
        <View>
            <Text style={Styles.dataText}>Senha</Text>
            <TextInput onChangeText={password => setPassword(password)} style={Styles.input} />
        </View>
    );
};
