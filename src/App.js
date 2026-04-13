import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CouponsPage from "./pages/CouponsPage";
import ImagesPage from "./pages/ImagesPage";
import Home from "./components/home";


function App() {

  return (
    <div className="App">

      <div className="container">
        <Router>
          <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>            
            <Link to="/coupons">Coupons</Link>
            <Link to="/images">Images</Link>
          </nav>

          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/coupons" element={<CouponsPage />} />
            <Route path="/images" element={<ImagesPage />} />
          </Routes>
        </Router>


      </div>
    </div>

  );
}

export default App;
