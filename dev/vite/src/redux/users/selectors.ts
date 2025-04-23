import { RootState } from "@/redux/store";

// userIdの値を取得するセレクタ
const selectUserId = (state: RootState) => state.users.userId;

// userNameの値を取得するセレクタ
const selectUserName = (state: RootState) => state.users.userName;

export {
  selectUserId,
  selectUserName,
};