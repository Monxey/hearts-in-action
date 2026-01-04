import './App.css'
import { BrowserRouter as _, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Donate from './pages/Donate.tsx';
import Resources from './pages/Resources.tsx';
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop.tsx';
import Newsletter from './pages/Newsletter.tsx';
import Events from './pages/Events.tsx';
import DigitalTools from './pages/DigitalTools.tsx';

function App() {
  return (
    <>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />         {/* default page */}
      <Route path="/about" element={<About />} />   {/* another page */}
      <Route path="/donate" element={<Donate />} />
      <Route path="/digital-tools" element={<DigitalTools />} />
      <Route path="/resources" element={<Resources />}/>
      <Route path="/newsletter" element={<Newsletter />}/>
      <Route path="/events" element={<Events />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
