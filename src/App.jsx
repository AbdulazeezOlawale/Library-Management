import DashBoard from "./Components/Dashboard/DashBoard";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import "../src/index.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <SideBar />
      <DashBoard />
    </div>
  );
};

export default App;
