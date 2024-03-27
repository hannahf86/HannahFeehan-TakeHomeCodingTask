// REACT-ROUTER-DOM
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// COMPONENTS
import Nav from "./Components/Nav";

// SCENES
import Dashboard from "./Scenes/Dashboard";
import Error from "./Scenes/Error";
import Settings from "./Scenes/Settings";
import Logout from "./Scenes/Logout";

// LOADERS, HELPERS & ACTIONS
import { mainLoader, dashboardAction } from "./Scenes/Dashboard";
import { logout } from "./Actions/logout";

// TOASTS
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route
        index
        element={<Dashboard />}
        loader={mainLoader}
        action={dashboardAction}
      />
      <Route path="settings" element={<Settings />}>
        <Route path="logout" element={<Logout />} action={logout} />
      </Route>

      {/* ERROR HANDLING */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
  <ToastContainer />;
}
