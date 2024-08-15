import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Contact } from 'pages/Contact';

const App = () =>
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>;

export default App;
