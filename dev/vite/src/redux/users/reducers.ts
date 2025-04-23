import { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./types";

// 複数の reducer 関数を定義
const changeUserId = (state: User, action: PayloadAction<string>) => {
  state.userId = action.payload;
}

const changeUserName = (state: User, action: PayloadAction<string>) => {
  state.userName = action.payload;
}

// 1つのオブジェクトとしてまとめてエクスポート
const articleReducers = {
  changeUserId,
  changeUserName,
};

export default articleReducers;