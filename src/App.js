
import './App.css'
import Home from './Home'
import Header from './Header'
import Footer from './Footer';
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    // BEM
    // Because of BEM we turn App into app because it's heavy on the front end
    <div className="app">
    {/* Home */}
    <Router>
    
    <Header />

    <Switch>
       <Route path="/search">
          <SearchPage/> 
        </Route> 
        
        <Route path="/">
            <Home /> 
        </Route>       
    </Switch>
 
    <Footer/>

    </Router>

   

       {/* Header */}

       {/* Banner */}
          {/* Search */}

       {/* Cards */}

       {/* Footer  */}

      {/* SearchPage */}
            {/* .... */}


  
    </div>
  );
}

export default App;
