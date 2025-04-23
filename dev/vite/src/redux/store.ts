import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { apiMiddlewares, apiReducers } from './apiCollection';

export const store = configureStore({
  reducer: {
    ...rootReducer,
    ...apiReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...apiMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;