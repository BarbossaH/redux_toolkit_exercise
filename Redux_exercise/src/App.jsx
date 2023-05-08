import { useDispatch, useSelector } from 'react-redux';
import { setAge, setName } from './store/student';

function App() {
  // to get the given data from redux
  const student = useSelector((state) => state.student);
  const allState = useSelector((state) => state);
  const dispatch = useDispatch();
  const handlerNameChange = () => {
    dispatch(setName('Fiona is my dear teacher'));
    //the next sentence is the same effect
    // dispatch({ type: 'stu/setName', payload: 'Fiona is my dear teacher' });
  };
  const handlerAgeChange = () => {
    dispatch(setAge(1));
  };
  return (
    <div>
      <p>{JSON.stringify(allState)}</p>
      <p>{student.name}</p>
      <p>{student.age}</p>
      <button onClick={handlerNameChange}>ChangeName</button>
      <button onClick={handlerAgeChange}>ChangeAge</button>
    </div>
  );
}

export default App;
