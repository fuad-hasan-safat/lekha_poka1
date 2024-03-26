import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './features/user/authSlice';
interface RootState {
    // Add more slices here as needed
    auth: typeof authReducer;
  }
  
  const rootReducer = combineReducers<RootState>({
    // Add more reducers here as needed
    auth: authReducer,
  });
  
  export default rootReducer;
