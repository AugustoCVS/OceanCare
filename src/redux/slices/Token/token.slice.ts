import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TokenProps = {
  token: string;
};

const initialState: TokenProps = {
  token: "",
};

const tokenSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<TokenProps>) => {
      state.token = action.payload.token;
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;