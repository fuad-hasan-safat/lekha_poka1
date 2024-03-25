import { createSlice } from '@reduxjs/toolkit';

export interface NavFooterState {
  hideNavbarFooter: boolean;
}

const initialState: NavFooterState = {
  hideNavbarFooter: false, // Initially show navbar and footer
};

export const showNavbarFooterSlice = createSlice({
  name: 'showNavbarFooterState',
  initialState,
  reducers: {
    makeTrueFalse: (state) => {
      state.hideNavbarFooter = !false
    },
  },
},
);

export const { makeTrueFalse } = showNavbarFooterSlice.actions;
export default showNavbarFooterSlice.reducer;
