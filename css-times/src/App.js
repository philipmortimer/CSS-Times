import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from "./Pages/Home/Home.js";

function App() {
  return (
    <>
      <Router className="router">
        <Routes>  
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
