import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const studentApi = createApi({
  reducerPath: 'studentApi', //it cannot be duplicate with other api and reducers
  // the tool of request
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/',
  }),
  tagTypes: ['student'],
  endpoints(build) {
    return {
      getStudents: build.query({
        query() {
          //to specify the subpath
          //http://localhost:1337/api/students
          return 'students';
        },
        //this place is a little confusing, it's needed to give every data a unique tag
        providesTags: [{ type: 'student', id: 'list' }],
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
        providesTags: (result, error, id) => [{ type: 'student', id }],
        transformResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data;
        },
        // Set the duration of cached data storage, it start countdown after uninstall the element
        keepUnusedDataFor: 60, //default value is 60
      }),
      delStudentById: build.mutation({
        query(id) {
          return {
            url: `students/${id}`,
            method: 'delete',
          };
        },
        invalidatesTags: [{ type: 'student', id: 'list' }],
      }),
      addStudent: build.mutation({
        query(studentInfo) {
          return {
            url: 'students',
            method: 'post',
            body: { data: studentInfo },
          };
        },
        // invalidatesTags: [{ type: 'student', id: 'list' }],
        invalidatesTags: [{ type: 'student', id: 'list' }],
      }),
      updateStudentById: build.mutation({
        query({ id, studentInfo }) {
          return {
            url: `students/${id}`,
            method: 'put',
            body: { data: studentInfo },
          };
        },
        invalidatesTags: (result, error, id) => [
          { type: 'student', id },
          { type: 'student', id: 'list' },
        ],
      }),
    };
  },
});

export const {
  useGetStudentsQuery,
  useGetStudentsByIdQuery,
  useDelStudentByIdMutation,
  useAddStudentMutation,
  useUpdateStudentByIdMutation,
} = studentApi;
export default studentApi;
