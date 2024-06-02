import React from "react";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Host } from "react-native-portalize";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StackComponent from "./src/routes/stack.routes";
import { store } from "@/redux/store";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Host>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <StatusBar style="dark" />
              <StackComponent />
            </QueryClientProvider>
          </Provider>
        </Host>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
