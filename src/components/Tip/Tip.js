import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Styles from "./Styles";

export default function Tip({ user }) {
    function tip() {
        if (user === "Rodrigo") {
            Alert.alert("Seu nome invertido todo em letras minúsculas.");
        } else if (user === "Fogo") {
            Alert.alert("Nome do usuário em inglês.");
        } else if (user === "water") {
            Alert.alert("Nome do usuário em portugês.");
        };
    };
    return (
        <View style={Styles.tipView}>
            <TouchableOpacity onPress={() => tip()} style={Styles.tipButton}>
                <Text style={Styles.tipText}>Dica de Senha</Text>
            </TouchableOpacity>
        </View>
    );
};
