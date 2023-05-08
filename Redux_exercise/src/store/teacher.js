import { createSlice } from '@reduxjs/toolkit';

const teacherSlice = createSlice({
  name: 'teacher',
  initialState: {
    name: 'Fiona',
    age: 18,
    gender: 'female',
    address: 'Mt Albert',
  },
  reducers: {
    setTeacherName(state, action) {
      state.name = action.payload;
    },
    setTeacherAge(state, action) {
      state.age = action.payload;
    },
  },
});

export const { setTeacherName, setTeacherAge } = teacherSlice.actions;
// export const { reducer: teacherReducer } = teacherSlice;
export const teacherReducer = teacherSlice.reducer;
