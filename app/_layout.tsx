import { ThemeProvider } from "@/components/Theme";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Layout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "My surveys" }} />
          <Stack.Screen name="review" options={{ title: "Review answers" }} />
          <Stack.Screen name="step/[stepIndex]" />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
