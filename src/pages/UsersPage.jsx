import SingleUser from '../components/users/SingleUser';
import useFetch from '../hooks/useFetch';

function UsersPage(props) {
  const [usersArr, setUsersArr] = useFetch();

  console.log('usersArr ===', usersArr);

  return (
    <div>
      <h1>Our users</h1>
      <ul className='unlisted grid'>
        {usersArr.map((uObj) => (
          <SingleUser key={uObj.id} {...uObj} />
        ))}
      </ul>
    </div>
  );
}
export default UsersPage;
