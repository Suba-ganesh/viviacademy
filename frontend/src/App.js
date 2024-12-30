import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import CustomNavbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
