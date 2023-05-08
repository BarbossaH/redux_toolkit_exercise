import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'stu',
  initialState: {
    name: 'Julian',
    age: 18,
    gender: 'male',
    address: 'Mt Albert',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
  },
});
export const { setName, setAge } = studentSlice.actions;
export const { reducer: studentReducer } = studentSlice;
