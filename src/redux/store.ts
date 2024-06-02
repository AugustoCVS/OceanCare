import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/User/user.slice";
import tokenReducer from "./slices/Token/token.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;