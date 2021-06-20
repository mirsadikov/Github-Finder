import { Fragment, useEffect, useContext } from 'react';
import Users from '../users/Users';
import Search from '../users/Search';
import GithubContext from '../../context/github/githubContext';

export default function Home() {
  const { getDefaultUsers } = useContext(GithubContext);
  useEffect(() => {
    getDefaultUsers();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}
