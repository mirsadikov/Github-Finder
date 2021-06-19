import PropTypes from 'prop-types';
import { Component } from 'react';

import RepoItem from './RepoItem';

export default class Repos extends Component {
  static propTypes = {
    repos: PropTypes.array.isRequired,
  };
  render() {
    const { repos } = this.props;
    return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
  }
}
