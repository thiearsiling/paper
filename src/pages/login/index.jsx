import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import styles from "./styles";

export default Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const hidePassword = () => {
    setIsPasswordHide(!isPasswordHide);
  };

  const doLogin = () => {
    setIsLoading(true);
    console.log(" loding");
  };

  const imageContainer = (
    <View style={styles.imageContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/ai-logo.webp")}
      ></Image>
    </View>
  );

  const buttons = (
    <View style={styles.loginButonContainer}>
      <Button
      // loading={isLoading}
      // onPress={doLogin}
      >
        Registrar
      </Button>
      <Button
        mode="contained-tonal"
        disabled={!userName || !password}
        loading={isLoading}
        onPress={doLogin}
      >
        Entrar
      </Button>
    </View>
  );

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {imageContainer}
      <View style={styles.formContainer}>
        <TextInput
          label="username"
          value={userName}
          onChangeText={setUserName}
          mode="outlined"
        />
        <TextInput
          label="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isPasswordHide}
          right={<TextInput.Icon icon="eye" onPress={hidePassword} />}
          mode="outlined"
        />
        {buttons}
      </View>
    </View>
  );
};
