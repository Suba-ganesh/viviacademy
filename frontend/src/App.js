import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import CustomNavbar from './Components/Navbar/Navbar';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import ProfessionalCourse from './Components/Professional/Professional';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomNavbar />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <div>
                <Home />
              </div>
            }
            />
            <Route path="/professional-courses" element={<ProfessionalCourse/>} />

            <Route path="/course/:dataset/:id" element={<CourseDetails />} />
          </Routes>
        </div>
        <Footer />

      </Router>

    </div>
  );
}

export default App;
