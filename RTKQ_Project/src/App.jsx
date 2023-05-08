import {
  useGetStudentsQuery,
  useGetStudentsByIdQuery,
} from './store/studentApi';

function App() {
  const obj = useGetStudentsQuery();
  // const obj1 = useGetStudentsByIdQuery(1);
  // console.log(obj);
  // console.log(obj1);
  return <div>App</div>;
}

export default App;
