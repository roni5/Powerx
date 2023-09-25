import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authslice from "../components/Login/authslice";
import noteslice from "../components/Note/noteslice";

export const store = configureStore({
  reducer: {
    auth: authslice,
    note: noteslice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
