import { Link } from "react-router-dom";
import Logo from "../../assets/etanois-logo.png";
import UserIcon from "./UserIcon";

/**
 * Functional component representing the header of the application.
 * @returns {JSX.Element} - JSX element representing the header.
 */
function Header() {
  return (
    // Header container with styling classes
    <header className="bg-white fixed top-0 left-0 w-full shadow-md">
      {/* Container div for the header content */}
      <div className="bg-white container mx-auto flex items-center justify-center h-full">
        {/* Link to the home page with logo image */}
        <Link to="/" className="flex items-center h-full">
          {/* Logo image with alt text */}
          <img src={Logo} alt="Logo" className="bg-white" />
        </Link>
      </div>
      {/* UserIcon component for displaying user-related information */}
      <UserIcon />
    </header>
  );
}

// Exporting the Header component as the default export
export default Header;
