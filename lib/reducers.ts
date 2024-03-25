import { combineReducers } from '@reduxjs/toolkit';
import showNavbarFooterReducer from './features/navbar-footer/showNavbarFooterSlice'; // Replace with your slice paths
// Define the type of your root state based on your slices
interface RootState {
    navbarState: typeof showNavbarFooterReducer;
    // Add more slices here as needed
  }
  
  const rootReducer = combineReducers<RootState>({
    navbarState: showNavbarFooterReducer, // Use the reducer function here
    // Add more reducers here as needed
  });
  
  export default rootReducer;
