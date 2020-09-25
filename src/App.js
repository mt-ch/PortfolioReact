import React from 'react';
import './css/App.scss';

//components
import Nav from './components/nav';
import Home from './pages/home';
import Info from './pages/info'
import Footer from './components/footer';
import Landing from './pages/landing';
import Projects from './pages/projects';
import Abstract from './components/abstract';

function App() {
  return (
    <div className="app">
      <Landing/>
      {/* <Abstract/> */}
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
