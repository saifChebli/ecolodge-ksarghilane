import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

// Add your imports here
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";


const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;