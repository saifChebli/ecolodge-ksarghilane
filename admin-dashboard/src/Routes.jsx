import { BrowserRouter , Routes as RouterRoutes, Route } from "react-router-dom";

// Add your imports here
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Booking from "./pages/booking/Booking";
import Layout from "./ui/Layout";
import Settings from "./pages/settings/Settings";


const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} > 
          <Route index element={<Dashboard />} />
          <Route path="/booking" element={<Booking  />} />
          <Route path="/settings" element={<Settings  />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;