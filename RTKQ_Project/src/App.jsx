import StudentList from './components/StudentList';

import { useGetStudentsQuery } from './store/studentApi';

function App() {
  // this is an asynchronous function, so we need to wait the results
  const { data, isSuccess, isLoading } = useGetStudentsQuery();
  // console.log(data);

  return (
    <div>
      {isLoading && <p> Data is loading</p>}
      {isSuccess && <StudentList students={data} />}
    </div>
  );
}

export default App;
