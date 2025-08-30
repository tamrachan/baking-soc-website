import { Routes, Route, Outlet } from "react-router-dom";
import './css/App.css';

// Import all your page and component assets
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Events from "./pages/Events";
import Recipes from './pages/Recipes';
// import Contribution from './pages/Contribution';
// import Feedback from './pages/Feedback';
import RecipeDetail from './pages/RecipeDetail';
import GetInTouch from './pages/GetInTouch';

import NavBar from './components/NavBar';
import Footer from "./components/Footer"; // Make sure this is pointing to the components folder

/**
 * MainLayout Component
 * This component acts as the main wrapper for your application.
 * It ensures that the NavBar and Footer are always visible, and the <Outlet>
 * renders the specific page content based on the current URL.
 */
function MainLayout() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="content-wrap">
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <Footer />
    </div>
  );
}

/**
 * SinglePageContent Component
 * This component contains all the sections for your main scrolling homepage.
 * It will be rendered inside the MainLayout's <Outlet> when the path is "/".
 */
function SinglePageContent() {
    return (
        <>
            <div id="home"><Home /></div>
            <div id="committee"><Committee /></div>
            <div id="events"><Events /></div>
            <div id="recipes"><Recipes /></div>
            <div id="get-in-touch"><GetInTouch /></div>
            {/* <div id="contribution"><Contribution /></div>
            <div id="feedback"><Feedback /></div> */}
        </>
    );
}

/**
 * The Main App Component
 * This is the root of your application, containing only the routing logic.
 */
function App() {
  return (
    <Routes>
      {/* All routes are now nested inside the MainLayout */}
      <Route path="/" element={<MainLayout />}>
        
        {/* The 'index' route renders SinglePageContent at the root path "/" */}
        <Route index element={<SinglePageContent />} />
        
        {/* The recipe detail route renders inside the MainLayout */}
        <Route path="recipe/:title" element={<RecipeDetail />} />

      </Route>
    </Routes>
  );
}

export default App;
