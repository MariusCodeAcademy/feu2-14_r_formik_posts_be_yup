import useFetch from '../hooks/useFetch';

function UsersPage(props) {
  const [usersArr, setUsersArr] = useFetch();

  console.log('usersArr ===', usersArr);

  return (
    <div>
      <h1>Our users</h1>
      <ul>
        {usersArr.map((uObj) => (
          <li key={uObj.id}>{uObj.name} </li>
        ))}
      </ul>
    </div>
  );
}
export default UsersPage;
