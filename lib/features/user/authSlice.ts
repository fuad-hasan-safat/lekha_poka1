import { createSlice} from '@reduxjs/toolkit';

interface AuthState {
  username: string;
  password: string;
  isLoading: boolean;
  isLoogedin: boolean;
  error: string | null;
}

const initialState: AuthState = {
    username: '',
    password: '',
    isLoading: false,
    isLoogedin: false,
    error: null
};



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   setUserName:(state,action) => {
    state.username= action.payload;
   },
   setPassword:(state, action) =>{
    state.password = action.payload;
   },
   setLoading:(state,action) => {
    state.isLoading= action.payload;
   },
   setError:(state, action) =>{
    state.error = action.payload;
   },
   setLoggedin:(state, action)=>{
    state.isLoogedin = action.payload;
   }
  },
});


export const { setPassword, setUserName, setError, setLoading, setLoggedin } = authSlice.actions;

export default authSlice.reducer;