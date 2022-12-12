import SingleUser from '../components/users/SingleUser';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

function UsersPage(props) {
  const [usersArr, setUsersArr] = useFetch();
  const [searchTerm, setSearchTerm] = useState('');
  console.log('usersArr ===', usersArr);

  // case sensitive
  // const filteredUsers = usersArr.filter((uObj) =>
  //   uObj.name.includes(searchTerm)
  // );
  // case insensitive
  const filteredUsers = usersArr.filter((uObj) =>
    uObj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Our users</h1>
      <fieldset>
        <legend>filter out</legend>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type='search'
          placeholder='Search'
        />
        <button>Back end filter</button>
      </fieldset>
      <p>You have searched for: {searchTerm}</p>
      <hr />
      <ul className='unlisted grid'>
        {filteredUsers.map((uObj) => (
          <SingleUser key={uObj.id} {...uObj} />
        ))}
      </ul>
    </div>
  );
}
export default UsersPage;
