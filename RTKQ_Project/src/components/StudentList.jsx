import './student.css';
// import StudentForm from './StudentForm';
import StudentSingleInfo from './StudentSingleInfo';
const StudentList = ({ students }) => {
  // console.log(props.students);

  return (
    <table>
      <caption>Student List</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Address</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item) => (
          <StudentSingleInfo key={item.id} studentInfo={item} />
        ))}
      </tbody>
      <tfoot>{/* <StudentForm /> */}</tfoot>
    </table>
  );
};
export default StudentList;
