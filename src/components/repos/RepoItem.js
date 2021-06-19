import { Component } from 'react';
import PropTypes from 'prop-types';

export default class RepoItem extends Component {
  static propTypes = {
    repo: PropTypes.object.isRequired,
  };

  render() {
    const { repo } = this.props;
    return (
      <div className='card'>
        <h3>
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
      </div>
    );
  }
}
