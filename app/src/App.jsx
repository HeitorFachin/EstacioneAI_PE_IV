import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AsideMenu from "./components/Menu/AsideMenu.jsx";
import SpotPage from "./Page/SpotPage.jsx";
import Dashboard from "./Page/Dashboard.jsx";

function App() {
  return (
    <Router>
      <div className="w-full h-screen flex bg-[#17395a]">
        <AsideMenu />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/spot" element={<SpotPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
