import AuthPage from "./components/AuthPage";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Sample from "./components/Sample"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
    </div>
    // <AuthPage/>
  );
};

export default App;
