import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { surveyApi } from "./api";
import { surveySlice } from "./surveySlice";

export const store = configureStore({
  reducer: {
    survey: surveySlice.reducer,
    [surveyApi.reducerPath]: surveyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(surveyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
