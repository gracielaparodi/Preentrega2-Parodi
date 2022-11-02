import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import BodyApp from "./components/BodyApp";

export default function App() {
  function funcionLogin() {
    alert("You have successfully logged in");
  }

  return (
    <div>
      <Navbar color={"#FE86BC"} />
      <ItemListContainer greeting={"¡Bienvenidos!"} />
      <BodyApp />
      <Footer />
    </div>
  );
}
