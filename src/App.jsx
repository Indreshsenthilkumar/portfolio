import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './data/ContentContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import BackgroundAnimation from './components/BackgroundAnimation';
import Admin from './admin/Admin';
import './App.css';

const Portfolio = () => (
  <>
    <Navbar />
    <Hero />
    <Quote />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Education />
    <Contact />
  </>
);

function App() {
  return (
    <ContentProvider>
      <Router basename="/portfolio">
        <div className="App">
          <BackgroundAnimation />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;
