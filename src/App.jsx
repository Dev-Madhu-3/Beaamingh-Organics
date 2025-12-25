import AuthPage from "./components/AuthPage";
import Home from "./Pages/Home"
import Navbar from "./components/Navbar"
import Sample from "./components/Sample"
import Products from "./Pages/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import NotFound from "./Pages/NotFound";
import { AppProvider } from "./components/Context";
import ProductDetailPage from "./Pages/ProductDetailPage"
import ShopByCategory from "./Pages/ShopByCategory";
import AboutPage from "./Pages/AboutPage";


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
          <Route path="/product/:id" element={<ComponentWithFooterAndNavbar component={<ProductDetailPage />} />} />
          <Route path="/categories" element={<ComponentWithFooterAndNavbar component={<ShopByCategory />} />} />
          <Route path="/about" element={<ComponentWithFooterAndNavbar component={<AboutPage />} />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </AppProvider>
    </>
    // <AuthPage/>
  );
};

export default App;
