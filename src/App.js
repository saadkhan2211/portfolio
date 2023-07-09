import './App.scss';
import Aos from 'aos';

import { useEffect } from 'react';

import Contact from './component/Contact';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Portfolio from './component/Portfolio';
import About from './component/About';
import Skills from './component/Skills';

const App = () => {

  useEffect(() => {
    Aos.init(2000)
  }, []);

  return (
    <div>
      <div className="nav-bar sticky-top">
        <NavBar/>
      </div>
        <div className='container'>
          {/* Home */}
          <div data-aos="fade-down">
            <Home/>
          </div>

          {/* About */}
          <div data-aos="fade-down">
            <About/>
          </div>
          

          {/* Skills */}
            <Skills/>
            

          {/* Portfolio */}
          <div data-aos="fade-down">
            <Portfolio/>
          </div>

          {/* Contact */}
            <Contact/>
          
        </div>
    </div>
  );
}

export default App;
