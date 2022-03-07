import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from "react-native";

export default function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

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

  function tip() {
    if (user === "Rodrigo") {
      Alert.alert("Seu nome invertido todo em letras minúsculas.");
    } else if (user === "Fogo") {
      Alert.alert("Nome do usuário em inglês.");
    } else if (user === "water") {
      Alert.alert("Nome do usuário em portugês.")
    };
  };

  return (
    <View style={Styles.app}>
      <StatusBar backgroundColor="#ff6600" />
      <View style={Styles.userView}>
        <Text style={Styles.dataText}>Nome de Usuário</Text>
        <TextInput onChangeText={user => setUser(user)} style={Styles.input} />
      </View>
      <View style={Styles.passwordView}>
        <Text style={Styles.dataText}>Senha</Text>
        <TextInput onChangeText={password => setPassword(password)} style={Styles.input} />
      </View>
      <View style={Styles.loginView}>
        <TouchableOpacity onPress={() => login()} style={Styles.loginButton}>
          <Text style={Styles.loginText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.tipView}>
        <TouchableOpacity onPress={() => tip()} style={Styles.tipButton}>
          <Text style={Styles.tipText}>Dica de Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  dataText: {
    fontSize: 24,
    color: "#000000",
    paddingLeft: 10,
    paddingBottom: 10,
  },
  loginText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff"
  },
  tipText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff"
  },
  input: {
    backgroundColor: "#0080a6",
    width: "95%",
    alignSelf: "center",
    borderRadius: 5,
    color: "#ffffff",
    fontSize: 20,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: "#0080a6",
    width: 90,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tipButton: {
    backgroundColor: "#ff6600",
    width: 300,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginView: {
    paddingTop: 40,
    alignItems: "center",
  },
  tipView: {
    paddingTop: 370,
    alignItems: "center",
  },
  userView: {
    paddingBottom: 30,
  }
});
