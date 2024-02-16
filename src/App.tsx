import "./assets/css/reset.css";
import './assets/css/tailwind.css'
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import FooterPage from "./pages/main/Footer";
import NavbarPage from "./pages/main/NavbarPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarPage />
        <Router />
        <FooterPage />
      </BrowserRouter>
    </>
  )
}

export default App
