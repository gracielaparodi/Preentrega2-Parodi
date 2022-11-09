import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Carrito from "./components/Carrito";
import HomePage from "./components/HomePage";
import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {

  return (

    <BrowserRouter>
      <div>
        <Navbar color={"#FE86BC"} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
        </Routes>
        <Footer />

      </div>
    </BrowserRouter >

  );
}