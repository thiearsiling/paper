import { StyleSheet } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Main from "./app/pages/Main";

export default function App() {
  const theme = { ...DefaultTheme };

  return (
    <PaperProvider theme={theme}>
      <Main style={styles.main} />
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
