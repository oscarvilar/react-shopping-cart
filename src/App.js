import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header/Header'
import About from "./pages/About";
import Contact from "./pages/Contact";
import './index.css'


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/tienda" element={<Products />}></Route>
        <Route exact path="/contacto" element={<About />}></Route>
        <Route exact path="/sobre-nosotros" element={<Contact />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
