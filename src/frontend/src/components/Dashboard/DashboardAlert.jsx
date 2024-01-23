// Importing the alert icon and the prop-types library
import { GoAlertFill } from "react-icons/go";
import PropTypes from 'prop-types';

/**
 * DashboardAlert Component
 * 
 * This component displays an alert based on the provided status.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {string} props.status - The status of the alert. It can be 'ALERT', 'OFFLINE', 'OK', or any other value.
 * 
 * @returns {JSX.Element} The DashboardAlert component
 */
function DashboardAlert({ status }) {
  // Variables that will be used to set the color class and the alert text
  let colorClass;
  let textAlert;

  // Switch case to set the color class and the alert text based on the status
  switch (status) {
    case 'ALERT':
      colorClass = 'text-lightRed bg-boldRed'; 
      textAlert = '  Alerta  ';
      break;
    case 'CLOSED':
      colorClass = 'text-lightOrange bg-boldOrange';
      textAlert = 'Encerrado'; 
      break;
    case 'RUNNING':
      colorClass = 'text-lightGreen bg-boldGreen'; 
      textAlert = 'Ok';
      break;
    default:
      colorClass = 'text-white bg-gray';
  }

  // Returning the component with the set color class and alert text
  return(
    <div className={`inline-flex rounded-xl items-center justify-center ${colorClass}`} style={{minWidth: '100px'}}>
      {status === 'ALERT' && <GoAlertFill className={colorClass} />}
      <span className='mx-'>{textAlert}</span>
      {status === 'ALERT' && <GoAlertFill className={colorClass} />}
    </div>
  )
}

// Prop validation for the DashboardAlert component
DashboardAlert.propTypes ={
  status: PropTypes.string.isRequired,
}

// Exporting the DashboardAlert component
export default DashboardAlert;
