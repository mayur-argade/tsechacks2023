import logo from './logo.svg';
import './App.css';
import { GuestRouteForm } from './components/Homepage/GuestRouteForm';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { FeedPage } from './components/Feed/FeedPage';
import Navbar from './components/Navbar/Navbar';
import { FlatList } from './components/Feed/Flat/FlatList';
import { RoomMatesList } from './components/Feed/RoomMates/RoomMatesList';

function App() {
  return (
    <>
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<GuestRouteForm/>}/>
        <Route exact path = 'feed' element={<FeedPage/>}>
          <Route path = 'flats' element = {<FlatList/>}/>
          <Route path = 'roommates' element = {<RoomMatesList/>}/>
        </Route>
      </Routes> 
    </Router>
    </>
  );
}

export default App;
