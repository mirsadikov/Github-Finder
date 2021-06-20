import { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export default function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' style={{ marginRight: '5px' }}></i>
        {alert.msg}
      </div>
    )
  );
}
