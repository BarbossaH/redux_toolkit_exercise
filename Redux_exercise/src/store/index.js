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

export const { setAge, setName } = studentSlice.actions;
// console.log(studentSlice.actions);
// setName()其实是在执行创建type和payload的值，然后放入redux中
console.log(setName('I am payload'));
console.log(setName);
