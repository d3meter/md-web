import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Timelines from './pages/Timelines';

function App() {
  return (
<Router >
  <Routes >
    <Route path='/' element={<Layout />}>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/timelines' element={<Timelines />}/>
    </Route>
  </Routes>
</Router >
  );
}

export default App;
