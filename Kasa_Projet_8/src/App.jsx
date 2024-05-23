import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Home   } from './pages/Home';
import { About  } from './pages/About';
import { Houses } from './pages/Houses';
import { Error  } from './pages/Error';
import { Footer } from "./components/common/Footer"

function App() {
  return (
    <Router>
      <div className="App">
		    <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logement/:id" element={<Houses />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
