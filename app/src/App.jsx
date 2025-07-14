import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AsideMenu from "./components/Menu/AsideMenu.jsx";
import SpotPage from "./Page/Spot.jsx";
import Dashboard from "./Page/Dashboard.jsx";
import ContactPage from "./Page/Contact.jsx";
import LoginPage from "./Page/Login.jsx";
import ProtectedRoute from "./components/ProtectRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/*"
            element={
              <div className="w-full h-screen flex bg-[#17395a]">
                <AsideMenu />
                <div className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/spots" element={<SpotPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
