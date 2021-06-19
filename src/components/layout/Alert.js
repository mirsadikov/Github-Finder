import { Component } from 'react';

export default class Alert extends Component {
  render() {
    const { alert } = this.props;
    return (
      alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle' style={{ marginRight: '5px' }}></i>
          {alert.msg}
        </div>
      )
    );
  }
}
