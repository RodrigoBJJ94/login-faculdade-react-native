import React from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "./Styles";

export default function User({ setUser }) {
    return (
        <View style={Styles.userView}>
            <Text style={Styles.dataText}>Nome de Usuário</Text>
            <TextInput onChangeText={user => setUser(user)} style={Styles.input} />
        </View>
    );
};
