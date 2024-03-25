
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Replace with your root reducer path

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check for Next.js server-side rendering
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;

