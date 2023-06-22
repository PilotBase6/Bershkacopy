import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Category from "/src/sections/CategoryBanner";
import AppWomen from "/src/pages/Women/AppWomen.jsx";
import AppMen from "/src/pages/Men/AppMen.jsx";
import AppTeen from "/src/pages/Teen/AppTeen.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Bershkacopy/" element={<Category />} />
        <Route path="/Bershkacopy/AppWomen" element={<AppWomen />} />
        <Route path="/Bershkacopy/AppMen" element={<AppMen />} />
        <Route path="/Bershkacopy/AppTeen" element={<AppTeen />} />
    
      </Routes>
    </Router>
  );
}

export default App;
