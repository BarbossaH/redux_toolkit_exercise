import { useEffect, useState } from 'react';
import {
  useAddStudentMutation,
  useGetStudentsByIdQuery,
  useUpdateStudentByIdMutation,
} from '../store/studentApi';

const StudentForm = ({ stuId, onCancel }) => {
  const { data: singleStuInfo, isSuccess } = useGetStudentsByIdQuery(stuId, {
    skip: !stuId, //to skip to fetching data from the server
  });
  // if (isSuccess) console.log(singleStuInfo.attributes);
  const [inputData, setInputData] = useState({
    name: '',
    age: '',
    gender: 'male',
    address: '',
  });
  useEffect(() => {
    if (isSuccess) {
      setInputData(singleStuInfo.attributes);
    }
  }, [isSuccess]);
  const handleNameChange = (e) => {
    setInputData((prevState) => ({ ...prevState, name: e.target.value }));
  };
  const handleAgeChange = (e) => {
    setInputData((prevState) => ({ ...prevState, age: +e.target.value }));
  };
  const handleGenderChange = (e) => {
    console.log(e.target.value);
    setInputData((prevState) => ({ ...prevState, gender: e.target.value }));
  };
  const handleAddressChange = (e) => {
    setInputData((prevState) => ({ ...prevState, address: e.target.value }));
  };

  const [addStudent, { isSuccess: isAddStudent }] = useAddStudentMutation();
  const [updateStudent, { isSuccess: isUpdateStudent }] =
    useUpdateStudentByIdMutation();
  const handleSubmit = () => {
    console.log(inputData);
    addStudent(inputData);
    setInputData({
      name: '',
      age: '',
      gender: 'male',
      address: '',
    });
  };
  const handleUpdate = () => {
    console.log(inputData, stuId);
    updateStudent({
      id: stuId,
      studentInfo: inputData,
    });
    onCancel();
  };
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            value={inputData.name}
            onChange={handleNameChange}
          />
        </td>
        <td>
          <select value={inputData.gender} onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </td>
        <td>
          <input type="text" value={inputData.age} onChange={handleAgeChange} />
        </td>
        <td>
          <input
            type="text"
            value={inputData.address}
            onChange={handleAddressChange}
          />
        </td>
        {stuId && (
          <td>
            <button onClick={() => onCancel()}>Cancel</button>
            <button onClick={handleUpdate}>Confirm</button>
          </td>
        )}
        {!stuId && (
          <td>
            <button onClick={handleSubmit}>Add</button>
          </td>
        )}
      </tr>
    </>
  );
};
export default StudentForm;
