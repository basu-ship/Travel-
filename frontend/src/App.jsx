import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login  from "./pages/Login";
import Search from "./pages/Search";
import Trips from "./pages/Trips";
import Booking from "./pages/Bookings";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element= {<Landing/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/search" element= {<Search/>}/>
      <Route path="/trips" element= {<Trips/>}/>
      <Route path="/bookings" element= {<Booking/>}/>
    </Routes>
  );
}

export default App;