import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Gallery from "./gallery/Gallery";
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    
    <>
     <Navbar />
     <Routes>

     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/skill" element={<Skills />}/>
     <Route path="/gallery" element={<Gallery />}/>
     <Route path="/contact" element={<Contact />}/>
     </Routes>








    </>
    
  
  );
}

export default App;
