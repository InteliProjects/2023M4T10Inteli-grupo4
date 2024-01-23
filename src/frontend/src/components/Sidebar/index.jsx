import { useState } from "react";
import SidebarItem from "./SidebarItem.jsx";

/**
 * Functional component representing a sidebar with toggle functionality.
 * @returns {JSX.Element} - JSX element representing the sidebar.
 */
function Sidebar() {
  // State to manage the visibility of the sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Overlay div to cover the screen when the sidebar is active */}
      <div
        className={`${
          showSidebar ? "fixed inset-0 bg-black opacity-50 z-30" : "hidden"
        }`}
        onClick={() => setShowSidebar(false)}
      />
      {/* Button to toggle the visibility of the sidebar */}
      <button
        className={`flex text-4xl items-center cursor-pointer fixed left-10 top-6 z-50 ${
          showSidebar ? "text-white" : "text-blue"
        } pointer-events-auto z-60`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {/* Conditional rendering for 'x' or hamburger icon based on sidebar visibility */}
        {showSidebar ? <div className="text-white">x</div> : <div>&#9776;</div>}
      </button>
      {/* Sidebar content with conditional styling for visibility and transition animation */}
      <div
        className={`${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transform top-0 left-0 w-[35vw] bg-blue p-10 pl-20 text-white fixed h-full z-50 ease-in-out duration-300 rounded-r-lg flex flex-col justify-center`}
      >
        {/* Sidebar items with associated paths */}
        <SidebarItem path="/tickets/new">Novo Ticket</SidebarItem>
        <SidebarItem path="/">Tickets</SidebarItem>
        <SidebarItem path="/items">Itens</SidebarItem>
        <SidebarItem path="/register-item">Registrar Item</SidebarItem>
        <SidebarItem path="/mechanics">Mecânicos</SidebarItem>
        <SidebarItem path="/mechanics/new">Novo Mecânico</SidebarItem>
        <SidebarItem path="/locals">Locais</SidebarItem>
        <SidebarItem path="/allocations/items">Alocações</SidebarItem>
        <SidebarItem path="/allocations/new">Nova Alocação</SidebarItem>

      </div>
    </>
  );
}

// Exporting the Sidebar component as the default export
export default Sidebar;
