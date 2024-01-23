import DashboardAlert from "./DashboardAlert";
import PropTypes from 'prop-types';

/**
 * TableRow Component
 * 
 * This component represents a table row in the dashboard.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {Function} props.onRowClick - Callback function triggered when the row is clicked
 * 
 * @returns {JSX.Element} The TableRow component
 */
const TableRow = ({ onRowClick, ...props }) => {
  // Extracting keys from props excluding 'allocations', 'item', and 'local'
  const keys = Object.keys(props).filter(key => key !== 'allocations' && key !== 'item' && key !== 'local');

  return (
    // Table row with an onClick event triggering onRowClick callback
    <tr onClick={() => onRowClick(props)}>
      {keys.map((key, index) => (
        // Table data cell with styling classes
        <td key={index} className="px-10 py-4 whitespace-nowrap text-sm text-gray-500 w-1/6">
          {/* Conditional rendering based on the key */}
          {key === 'status' ? (
            // Rendering DashboardAlert component for 'status' key
            <DashboardAlert status={props[key]} />
          ) : (
            // Rendering either stringified object or plain value
            typeof props[key] === 'object' ? JSON.stringify(props[key]) : props[key]
          )}
        </td>
      ))}
    </tr>
  );
};

// PropTypes for type checking and documenting component API
TableRow.propTypes = {
  onRowClick: PropTypes.func.isRequired,
};

export default TableRow;
