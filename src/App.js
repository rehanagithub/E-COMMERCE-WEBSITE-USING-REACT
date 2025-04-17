import './App.css';

import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'

function App() {
  return (
    <div className="App">
       <Router basename="/E-COMMERCE-WEBSITE-USING-REACT">
        <Routes>
          <Route path='/login'
          element={
            <>
            <Login/>
            </>
          }
          />
          <Route 
            path="/checkout" 
            element={
              <>
                <Header />
                <Checkout />
              </>
            } 
          />
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Home />
              </>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
