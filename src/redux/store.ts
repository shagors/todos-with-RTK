import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import { baseApi } from "./api/api";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Define RootState first
export type RootState = ReturnType<typeof store.getState>;

// Then define AppDispatch using RootState
export type AppDispatch = typeof store.dispatch;
