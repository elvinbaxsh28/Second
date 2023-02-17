import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import Users from "./components/Users";



function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/users" element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;