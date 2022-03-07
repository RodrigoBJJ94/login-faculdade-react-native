import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Styles from "./Styles";

export default function Login({ user, password }) {
    function login() {
        if ((user === "Rodrigo" && password === "ogirdor") ||
            (user === "Fogo" && password === "Fire") || (user === "water" && password === "água")) {
            Alert.alert("Usuário logado!");
        } else if ((user === "Rodrigo" && password !== "") ||
            (user === "Fogo" && password !== "") || (user === "water" && password !== "")) {
            Alert.alert("Senha incorreta!");
        } else if (user === "" && password === "") {
            Alert.alert("Favor preencha o usuário e a senha!");
        } else if (user === "") {
            Alert.alert("Favor preencha o usuário!");
        } else if (password === "") {
            Alert.alert("Favor preencha a senha!");
        } else {
            Alert.alert("Usuário inexistente!");
        };
    };

    return (
        <View style={Styles.loginView}>
            <TouchableOpacity onPress={() => login()} style={Styles.loginButton}>
                <Text style={Styles.loginText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};
