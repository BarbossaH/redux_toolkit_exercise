import { useEffect, useState } from 'react';
import { useGetStudentsByIdQuery } from '../store/studentApi';

const StudentForm = ({ stuId, onCancel }) => {
  const { data: singleStuInfo, isSuccess } = useGetStudentsByIdQuery(stuId);
  if (isSuccess) console.log(singleStuInfo.attributes);
  const [inputData, setInputData] = useState({
    name: '',
    age: '',
    gender: '',
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
    setInputData((prevState) => ({ ...prevState, gender: e.target.value }));
  };
  const handleAddressChange = (e) => {
    setInputData((prevState) => ({ ...prevState, address: e.target.value }));
  };

  const handleSubmit = () => {};
  const handleUpdate = () => {};
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
