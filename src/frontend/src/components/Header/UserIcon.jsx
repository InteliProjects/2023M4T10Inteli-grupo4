import { FaUser } from "react-icons/fa";

/**
 * Functional component representing a user icon button in the application header.
 * @returns {JSX.Element} - JSX element representing the user icon button.
 */
function UserIcon() {
  return (
    // Button container with styling classes
    <button className="bg-gray py-2 px-4 fixed top-0 right-0 m-4 rounded-xl shadow-md">
        {/* Font Awesome user icon with styling classes */}
        <FaUser className="text-blue mx-auto text-6xl p-4 rounded-full" />
    </button>
  );
}

// Exporting the UserIcon component as the default export
export default UserIcon;
