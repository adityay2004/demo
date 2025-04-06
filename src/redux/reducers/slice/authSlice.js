
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authDataList: [],
  lastId: 0,
};
const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    addAuthData: (state, action) => {
      const existingUserIndex = state.authDataList.findIndex(
        (user) => user.phoneNumber === action?.payload?.phoneNumber
      );

      if (existingUserIndex !== -1) {
        const updatedAuthData = {
          ...state.authDataList[existingUserIndex],
          ...action.payload,
        };
        state.authDataList[existingUserIndex] = updatedAuthData;
       
      } else {
        state.lastId += 1;
        const newAuthData = {
          id: state.lastId,
          ...action.payload,
        };
        state.authDataList.push(newAuthData);
       
      }
    },

    deleteAllAuthData: (state) => {
      state.authDataList = [];
      state.lastId = 0;
     
    },

    setAuthDataList: (state, action) => {
      state.authDataList = action.payload;
    },
  },
});

export const { addAuthData, deleteAllAuthData, setAuthDataList } = authSlice.actions;
export default authSlice.reducer;
