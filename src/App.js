//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import {Route,Link,Switch} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen.js';
import BookingScreen from './Screens/BookingScreen.js';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
              <Link to="/home"></Link>
              <Link to="/enroll/:id"></Link>
        <Switch>
        <Route path="/home">
          <HomeScreen/>
          </Route>
          <Route path="/enroll/:id" component ={BookingScreen}>
          </Route>
          <Route path = '/register' exact component = {RegisterScreen}>
          </Route>
          <Route path ='/login' exact component ={LoginScreen}>
          </Route>
          </Switch>
      
    
       </div>
      
    
  );
}

export default App;
