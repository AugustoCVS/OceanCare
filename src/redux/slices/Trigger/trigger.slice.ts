import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  trigger: "",
};

const triggerSlice = createSlice({
  name: "trigger",
  initialState,
  reducers: {
    setTrigger: (state, action: PayloadAction<string>) => {
      state.trigger = action.payload;
    },
  },
});

export const { setTrigger } = triggerSlice.actions;

export default triggerSlice.reducer;