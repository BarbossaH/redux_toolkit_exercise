import { useState } from 'react';
import StudentForm from './StudentForm';

const StudentSingleInfo = ({ studentInfo }) => {
  // console.log(studentInfo);

  const [isEdit, setIsEdit] = useState(false);
  const cancelEdit = () => {
    setIsEdit(false);
  };
  // const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <>
      {!isEdit && (
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
      {isEdit && <StudentForm stuId={studentInfo.id} onCancel={cancelEdit} />}
    </>
  );
};
export default StudentSingleInfo;
