import PropTypes from 'prop-types';

/**
 * TitleDashboard Component
 * 
 * Functional component representing the title section of a dashboard.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string[]} props.dashboardColumns - Array of strings representing dashboard columns.
 * 
 * @returns {JSX.Element} - JSX element representing the title section of the dashboard.
 */
const TitleDashboard = ({ dashboardColumns }) => {
  return (
    // Container div with styling classes
    <div className="bg-blue rounded-xl max-w-screen-2xl mx-auto mt-4">
      {/* Flex container for the title section */}
      <div className="flex w-full">
        {/* Mapping over dashboardColumns to render individual column titles */}
        {dashboardColumns.filter(column => column !== 'allocations').map((column, index) => (
          // Individual column title div with styling classes
          <div key={index} className="flex-1 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            {column}
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes for type checking and documenting component API
TitleDashboard.propTypes = {
  dashboardColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TitleDashboard;
