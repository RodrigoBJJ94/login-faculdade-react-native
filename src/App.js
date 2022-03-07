import React, { useState } from "react";
import { View } from "react-native";
import Statusbar from "./components/Statusbar/Statusbar";
import User from "./components/User/User";
import Password from "./components/Password/Password";
import Login from "./components/Login/Login";
import Tip from "./components/Tip/Tip";
import Styles from "./Styles";

export default function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={Styles.app}>
      <Statusbar />
      <User setUser={setUser} />
      <Password setPassword={setPassword} />
      <Login user={user} password={password} />
      <Tip user={user} />
    </View>
  );
};
