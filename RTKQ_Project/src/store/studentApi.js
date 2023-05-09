import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const studentApi = createApi({
  reducerPath: 'studentApi', //it cannot be duplicate with other api and reducers
  // the tool of request
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/',
  }),
  endpoints(build) {
    return {
      getStudents: build.query({
        query() {
          //to specify the subpath
          //http://localhost:1337/api/students
          return 'students';
        },
        //this can adjust the format of the return value
        transformResponse(baseQueryReturnValue) {
          // console.log(baseQueryReturnValue.data);
          // console.log(meta);
          return baseQueryReturnValue.data;
        },
      }),
      getStudentsById: build.query({
        query(id) {
          return `students/${id}`;
        },
        transformResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data;
        },
      }),
      // updateStudent: build.mutation(),
    };
  },
});

export const { useGetStudentsQuery, useGetStudentsByIdQuery } = studentApi;
export default studentApi;
