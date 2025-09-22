import AuthPage from "./components/AuthPage";
import Home from "./Pages/Home"
import Navbar from "./components/Navbar"
import Sample from "./components/Sample"
import Products from "./Pages/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import NotFound from "./Pages/NotFound";
import { AppProvider } from "./components/Context";


const ComponentWithFooterAndNavbar = ({ component }) => (
  <>
    <Navbar />
    {component}
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<ComponentWithFooterAndNavbar component={<Home />} />} />
          <Route path="/products" element={<ComponentWithFooterAndNavbar component={<Products />} />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/shop" element={<Navigate to="/products" />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </AppProvider>
    </>
    // <AuthPage/>
  );
};

export default App;
