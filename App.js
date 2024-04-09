import { StyleSheet } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Login from "./src/pages/login";

export default function App() {
  const theme = { ...DefaultTheme };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.main}>
        <Login />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
