import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/login";
import Register from "./src/pages/register";

export default function App() {
  const Stack = createNativeStackNavigator();
  const theme = { ...DefaultTheme };

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Novo usuário" }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
