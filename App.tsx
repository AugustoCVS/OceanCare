import React from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Host } from "react-native-portalize";

import StackComponent from "./src/routes/stack.routes";

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Host>
          <StatusBar style="dark" />
          <StackComponent />
        </Host>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
