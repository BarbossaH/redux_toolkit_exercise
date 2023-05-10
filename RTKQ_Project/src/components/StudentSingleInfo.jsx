import { useState } from 'react';
import StudentForm from './StudentForm';
import { useDelStudentByIdMutation } from '../store/studentApi';

const StudentSingleInfo = ({ studentInfo }) => {
  // console.log(studentInfo);

  const [isEdit, setIsEdit] = useState(false);
  const cancelEdit = () => {
    setIsEdit(false);
  };
  // const handleEdit = () => {};
  const [deleteStudentById, { isSuccess: isDeleteSuccess }] =
    useDelStudentByIdMutation();
  const handleDelete = () => {
    deleteStudentById(studentInfo.id);
  };
  return (
    <>
      {!isEdit && !isDeleteSuccess && (
        <tr>
          <td>{studentInfo.attributes.name}</td>
          <td>{studentInfo.attributes.gender}</td>
          <td>{studentInfo.attributes.age}</td>
          <td>{studentInfo.attributes.address}</td>
          <td>
            <button onClick={() => setIsEdit(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </tr>
      )}
      {isDeleteSuccess && (
        <tr>
          <td colSpan="5">Data has been deleted</td>
        </tr>
      )}
      {isEdit && <StudentForm stuId={studentInfo.id} onCancel={cancelEdit} />}
    </>
  );
};
export default StudentSingleInfo;
