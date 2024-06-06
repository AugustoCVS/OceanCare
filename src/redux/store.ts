import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/User/user.slice";
import tokenReducer from "./slices/Token/token.slice";
import triggerReducer from "./slices/Trigger/trigger.slice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    trigger: triggerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;