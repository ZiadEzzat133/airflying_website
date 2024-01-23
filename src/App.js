import './App.css';
import NavBar from '../src/Components/NavBar/Navbar.js'
import Home from '../src/Components/Hom/Home.js'
import Search from '../src/Components/Search/Search.js';
import Support from '../src/Components/Support/Support.js';
import Info from '../src/Components/Info/Info.js';
import Lounge from '../src/Components/Lounge/Lounge.js';
import Travelers from '../src/Components/Travelers/Travelers.js';
import Subscribers from '../src/Components/Subscribers/Subscribers.js';
import Footer from '../src/Components/Footer/Footer.js';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
}

export default App;
