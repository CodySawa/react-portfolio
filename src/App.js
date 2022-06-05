import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';



function App() {
  return (
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="about"
                element={<About />}
              />
              <Route
                path="/projects"
                element={<Projects />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="/resume"
                element={<Resume />}
              />
              
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
