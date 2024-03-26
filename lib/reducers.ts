import { combineReducers } from '@reduxjs/toolkit';
import showNavbarFooterReducer from './features/navbar-footer/showNavbarFooterSlice'; // Replace with your slice paths

import authReducer from './features/user/authSlice';
interface RootState {
    navbarState: typeof showNavbarFooterReducer;
    // Add more slices here as needed
    auth: typeof authReducer;
  }
  
  const rootReducer = combineReducers<RootState>({
    navbarState: showNavbarFooterReducer, // Use the reducer function here
    // Add more reducers here as needed
    auth: authReducer,
  });
  
  export default rootReducer;
