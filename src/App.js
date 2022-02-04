import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="flex flex-col bg-white min-h-screen w-full py-10 px-6">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
