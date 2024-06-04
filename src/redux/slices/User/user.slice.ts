import { UserProps } from 'src/services/interfaces/user';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserProps = {
  id: 0,
  name: "",
  email: "",
  reportedTrash: 0,
  achievements: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProps>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.reportedTrash = action.payload.reportedTrash;
      state.achievements = action.payload.achievements;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;