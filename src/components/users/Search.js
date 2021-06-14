import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  // we should bind
  onSubmit(e) {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit.bind(this)}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}
