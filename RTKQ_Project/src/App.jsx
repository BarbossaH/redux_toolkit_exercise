import StudentList from './components/StudentList';

import { useGetStudentsQuery } from './store/studentApi';

function App() {
  // this is an asynchronous function, so we need to wait the results
  const { data, isSuccess, isLoading } = useGetStudentsQuery(null, {
    selectFromResult: (result) => {
      if (result.data) {
        result.data = result.data.filter((item) => item.attributes.age >= 0);
      }
      return result;
    },
    pollingInterval: 0, //set up the polling interval 0 means never poll, unit is ms
    skip: false,
    refetchOnMountOrArgChange: false, // reloading the data or not. when we don't need the cached data, it can be set to true
    refetchOnFocus: false, // it also need to add the listener to the store
    refetchOnReconnect: true,
  });
  // console.log(data);

  return (
    <div>
      {isLoading && <p> Data is loading</p>}
      {isSuccess && <StudentList students={data} />}
    </div>
  );
}

export default App;
