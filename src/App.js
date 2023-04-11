import './App.css';
import {BrowserRouter as Router , Routes,Route,Link} from "react-router-dom";
import PortfolioComponent from './components/Routes/PortfolioComponent/PortfolioComponent';
import CalculatorComponent from './components/Routes/CalculatorComponent/CalculatorComponent';
import ApiaxiosComponent from './components/Routes/ApiaxiosComponent/ApiaxiosComponent';
function App() {
  return (
    <Router>
      <div className="app">
          <h3>Welcome to Home</h3>
          <ul className = "nav1">
            <li><Link to = "/Portfolio">Portfolio</Link></li>
            <li><Link to ="/Calculator"> Calculator  </Link></li>
            <li><Link to ="/APIaxios"> API  </Link></li>
          </ul>
        </div>

        <Routes>
          <Route exact path ="/Portfolio" element={<PortfolioComponent/>}> </Route>          
          <Route exact path ="/Calculator" element={<CalculatorComponent/>}> </Route>
          <Route exact path ="/APIaxios" element={<ApiaxiosComponent/>}> </Route>
        </Routes>
     
      
      
    </Router>
    
  );
}

export default App;
