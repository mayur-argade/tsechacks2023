import logo from "./logo.svg";
import "./App.css";
import GuestRouteForm from "./Components/GuestRouteForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RoomMatesList from "./Components/RoomMatesList";
import FlatList from "./Components/FlatList";
import FlatPage from "./Pages/FlatPage";
import Authenticate from "./Pages/Authenticate/Authenticate";
import Activate from "./Pages/Activate/Activate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuestRouteForm />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/activate" element={<Activate />} />

        <Route path="/home" element={<HomePage />}>
          <Route path="flats" element={<FlatList />} />
          <Route path="roommates" element={<RoomMatesList />} />
        </Route>
        <Route path="home/flats/flat/:id" element={<FlatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
