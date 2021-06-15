export default function Alert({ alert }) {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' style={{ marginRight: '5px' }}></i>
        {alert.msg}
      </div>
    )
  );
}
