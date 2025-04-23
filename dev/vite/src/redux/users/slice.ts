import { createSlice } from "@reduxjs/toolkit";
import articleReducers from "./reducers";
import type { User } from "./types";

// 初期状態
const initialState: User = {
  userId: "id",
  userName: "name",
};

// スライスの定義
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...articleReducers,
  }
});

export const { changeUserId, changeUserName } = userSlice.actions;
export default userSlice.reducer;