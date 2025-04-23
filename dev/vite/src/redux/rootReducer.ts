import usersReducer from "@/redux/users/slice";

export const rootReducer = {
  users: usersReducer,    // "user" reducerを統合
};