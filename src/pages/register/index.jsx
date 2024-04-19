import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  TextInput,
  ProgressBar,
  HelperText,
  MD3Colors,
  Button,
} from "react-native-paper";
import styles from "./styles";

export default Register = ({ navigation }) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [passwordStrenght, setPasswordStrenght] = useState({
    value: 0,
    label: null,
    color: null,
  });
  const [errors, setErrors] = useState({
    password: null,
  });
  const [isDisableSaveButton, setIsDisableSaveButton] = useState(true);

  const checkPassword = () => {
    if (password) {
      if (password !== confirmPassword && confirmPassword) {
        setErrors({ ...errors, password: "As senhas não conferem" });
      }

      if (password.length <= 5) {
        setPasswordStrenght({
          value: password.length / 10,
          label: "Fraco",
          color: MD3Colors.error50,
        });
      } else if (password.length > 6 && password.length < 8) {
        setPasswordStrenght({
          value: password.length / 10,
          label: "Médio",
          color: MD3Colors.primary50,
        });
      } else {
        setPasswordStrenght({
          value: password.length / 10,
          label: "Bom",
          color: "green",
        });
      }
    } else {
      setPasswordStrenght(0);
    }
  };

  const checkForm = () => {
    if (passwordStrenght.value >= 6) {
      if (userName != "") {
        setIsDisableSaveButton(false);
      }
    }
  };

  const handleSave = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    checkForm();
    checkPassword();
  }, [userName, password, confirmPassword]);

  return (
    <View style={styles.container}>
      <TextInput
        label="usuário"
        value={userName}
        onChangeText={setUserName}
        mode="outlined"
      />
      <TextInput
        label="senha"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        error={errors.password}
      />
      <TextInput
        label="confirme a senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry
      />

      <HelperText
        padding="none"
        style={{ marginBottom: -15, color: passwordStrenght.color }}
      >
        Força da Senha: {passwordStrenght.label}
      </HelperText>
      <ProgressBar
        progress={passwordStrenght.value}
        color={passwordStrenght.color}
      />
      <Button
        mode="contained"
        onPress={() => handleSave()}
        disabled={isDisableSaveButton}
      >
        Salvar
      </Button>
    </View>
  );
};
