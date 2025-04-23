import { userApi } from '@/redux/services/userApi';
import { Middleware } from '@reduxjs/toolkit';

export const apiReducers = {
  [userApi.reducerPath]: userApi.reducer,
};

export const apiMiddlewares: Middleware[] = [
  userApi.middleware,
];