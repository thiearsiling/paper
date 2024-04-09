import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default Main = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  formContainer: {
    flex: 2,
    gap: 10,
  },
  loginButonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 50,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
