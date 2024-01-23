import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import RegisterItem from "./pages/registerItem";
import Tickets from "./pages/tickets"
import TicketNew from "./pages/ticketNew"
import Allocations from "./pages/allocations";
import AllocationNew from "./pages/allocationNew";
import MechanicNew from "./pages/mechaincNew";
import Locals from "./pages/locals";
import Items from "./pages/items";
import Mechanics from "./pages/mechanics"


export const router = createBrowserRouter([
  {
    path: "/menu",
    element: <Root />,
  },
  {
    path: "/register-item",
    element: <RegisterItem />
  },
  {
    path: "/",
    element: <Tickets />
  },
  {
    path: "/tickets/new",
    element: <TicketNew />
  },
  {
    path: "/allocations/items",
    element: <Allocations />
  },
  {
    path:"/allocations/new",
    element: <AllocationNew />
  },
  {
    path: "/mechanics/new",
    element: <MechanicNew />
  },
  {
    path: "/locals",
    element: <Locals />
  },
  {
    path: "/items",
    element: <Items />
  },
  {
    path: "/mechanics",
    element: <Mechanics />
  }
]);