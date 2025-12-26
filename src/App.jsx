import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ShopByCategory from "./Pages/ShopByCategory";
import AboutPage from "./Pages/AboutPage";
import NotFound from "./Pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppProvider } from "./components/Context";

/* Layout wrapper */
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />

        <Route
          path="/categories"
          element={
            <Layout>
              <ShopByCategory />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />

        {/* Not Found */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
