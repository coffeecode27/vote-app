import "./App.css";
import {
  HashRouter as Router, // Ganti BrowserRouter menjadi HashRouter
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DisplayChart from "./pages/displayChartPage/index.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/display/vote/pemilu" />} />
          <Route path="/display/vote/pemilu" element={<DisplayChart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
