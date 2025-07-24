import './css/App.css';
import Home from "./pages/Home";
import Recipes from './pages/Recipes';
import Feedback from './pages/Feedback';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Contribution from './pages/Contribution';

function App() {
  return (

    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/contribution" element={<Contribution />}/>
          <Route path="/feedback" element={<Feedback />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
