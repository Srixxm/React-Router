import './App.css';
import {BrowserRouter as Router , Routes,Route,Link} from "react-router-dom";
import CounterComponent from './components/Routes/CounterComponent/CounterComponent';
import CalculatorComponent from './components/Routes/CalculatorComponent/CalculatorComponent';
import WelcomeComponent from './components/Routes/WelcomeComponent/WelcomeComponent';
function App() {
  return (
    <Router>
      <div className="App">
          <h2>Welcome To Home Page</h2><br></br>
          <ul className = "nav">
            <li><Link to = "/Counter">Home   </Link></li>
            <li><Link to ="/Subscribe"> Calculator  </Link></li>
            <li><Link to ="/Welcome"> API  </Link></li>
          </ul>
        </div>

        <Routes>
          <Route exact path ="/Counter" element={<CounterComponent/>}> </Route>          
          <Route exact path ="/Subscribe" element={<CalculatorComponent/>}> </Route>
          <Route exact path ="/Welcome" element={<WelcomeComponent/>}> </Route>
        </Routes>
     
      
      
    </Router>
    
  );
}

export default App;
