// import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'


// how to run a file 
// come to here directory firtly cd my-app then cd src then npm start
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import About from './pages/about/About';
import '../src/App.css'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
} from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Mybooking from './pages/mybooking/Mybooking';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Myprofile from './pages/myprofile/Myprofile';
import ShowRoom from './pages/showrooms/ShowRoom';
import Dashbord from './pages/dashbord/Dashbord';
import Add_room from './components/add_room/Add_room';
import View_room from './pages/view_room/View_room';
import Update_room from './pages/update_room/Update_room';
import Add_type from './components/add-type/Add_type';
import View_type from './components/view-type/View-type';

function App() {
   return (
      <>
      {/* <RoomState> */}
      <Router>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Login" element={<Login/>} />
            <Route exact path="/Signup" element={<Signup/>} />
            <Route exact path="/Contact" element={<Contact/>} />
            <Route exact path="/Rooms-Gallery" element={<Gallery/>} />
            <Route exact path="/Myprofile" element={<Myprofile/>} />
            <Route exact path="/Mybooking" element={<Mybooking/>} />
            <Route exact path="/Showroom/:id" element={<ShowRoom/>} />
            
            {/* admin dashbord */}
            <Route exact path="/admin" element={<Dashbord/>} />
            <Route exact path="/admin/add-room" element={<Add_room/>} />
            <Route exact path="/admin/view-room" element={<View_room/>} />
             <Route exact path="/admin/updateroom/:id" element={<Update_room/>} /> 
             <Route exact path="/admin/add-type" element={<Add_type/>} /> 
             <Route exact path="/admin/view-type" element={<View_type/>} /> 
            {/* <Route exact path="/deleteroom/:id" element={<ShowRoom/>} />  */}
        
            
         </Routes>
      </Router>
       {/* </RoomState> */}
      </>
   );
}

export default App;
