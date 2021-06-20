import { useContext } from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

export default function Users() {
  const { loading, users } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='users-container' style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
