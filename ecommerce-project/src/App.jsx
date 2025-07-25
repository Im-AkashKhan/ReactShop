import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./pages/Home"; 
import Women from "./pages/Women";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/women" element={<Women />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;


// THIS CODE IS COMMING FROM MAIN BRANCH