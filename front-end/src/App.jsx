import { Routes, Route } from "react-router-dom";
import './css/App.css';

import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Feedback from './pages/Feedback';
import Contribution from './pages/Contribution';
import Events from './pages/Events';

import NavBar from './components/NavBar';
// import AppLayout from './layouts/AppLayout'; // A new layout component

// We create a layout component to hold the single-page scroll content
function AppLayout() {
    return (
        <main className="main-content">
            <div id="home"><Home /></div>
            <div id="committee"><Committee /></div>
            <div id="events"><Events /></div>
            <div id="recipes"><Recipes /></div>
            <div id="contribution"><Contribution /></div>
            <div id="feedback"><Feedback /></div>
        </main>
    );
}


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/recipe/:title" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;


// import './css/App.css';

// import Home from "./pages/Home";
// import Committee from "./pages/Committee";
// import Recipes from './pages/Recipes';
// import RecipeDetail from './pages/RecipeDetail';
// import Feedback from './pages/Feedback';
// import Contribution from './pages/Contribution';
// import Events from './pages/Events';

// import NavBar from './components/NavBar';

// function AppLayout() {
//   return (
//     <div className='app-layout'>
//       <NavBar />
//       <main className="main-content">
//         <div id="home">
//           <Home />
//         </div>
//         <div id="committee">
//           <Committee />
//         </div>
//         <div id="events">
//           <Events />
//         </div>
//         <div id="recipes">
//           <Recipes />
//         </div>
//         <div id="contribution">
//           <Contribution />
//         </div>
//         <div id="feedback">
//           <Feedback />
//         </div>
//       </main>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<AppLayout />} />
//         <Route path="/recipe/:title" element={<RecipeDetail />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import './css/App.css';
// import {Routes, Route} from "react-router-dom";

// import Home from "./pages/Home";
// import Recipes from './pages/Recipes';
// import Feedback from './pages/Feedback';
// import Contribution from './pages/Contribution';
// import Events from './pages/Events';

// import NavBar from './components/NavBar';


// function App() {
//   return (

//     <div>
//       <NavBar />
//       <main className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />}/>
//           <Route path="/recipes" element={<Recipes />}/>
//           <Route path="/contribution" element={<Contribution />}/>
//           <Route path="/events" element={<Events />}/>
//           <Route path="/feedback" element={<Feedback />}/>
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;

