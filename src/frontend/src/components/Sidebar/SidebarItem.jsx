import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Functional component representing an item in the sidebar with navigation functionality.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.path - The path to navigate to when the item is clicked.
 * @param {React.ReactNode} props.children - The content to be rendered within the button.
 * @returns {JSX.Element} - JSX element representing the sidebar item.
 */
function SidebarItem(props) {
  // Hook to access the navigation function from react-router-dom
  const navigate = useNavigate();

  return (
    // Button with styling classes and onClick event for navigation
    <button
      onClick={() => navigate(props.path)}
      className="block w-full text-left text-white py-2 px-4 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-300 my-2"
    >
      {/* Content of the sidebar item */}
      {props.children}
    </button>
  );
}

// PropTypes for type checking and documenting component API
SidebarItem.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node,
};

// Exporting the SidebarItem component as the default export
export default SidebarItem;
