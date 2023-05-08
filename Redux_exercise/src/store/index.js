import { configureStore } from '@reduxjs/toolkit';
import { studentReducer } from './student';
import { teacherReducer } from './teacher';
// console.log(studentSlice.actions);
// setName()其实是在执行创建type和payload的值，然后放入redux中
// console.log(setName('I am payload'));
// console.log(setName);

const store = configureStore({
  reducer: {
    student: studentReducer,
    teacher: teacherReducer,
  },
});

export default store;
