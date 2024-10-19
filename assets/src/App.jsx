import React from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div id="root">
      <Header />
      <Main />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
