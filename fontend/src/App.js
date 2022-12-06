import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

//Component
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

// Screen
import Homescreen from  './screen/Homescreen'
import ProductScreen from  './screen/ProductScreen'
import CartScreen from  './screen/CartScreen'
import { useState } from 'react';
function App() {
  const [sideToggle , setSideToggle] = useState(false);
  return (
    <Router>
      <div className="App">
            <Navbar click={() => setSideToggle(!sideToggle)}/>
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/> 
            <Backdrop show={sideToggle}  click={() => setSideToggle(false)}/>
            <main>
              <Routes>
                <Route path="/" element={<Homescreen/>}/>
                <Route path="/products/:id" element={<ProductScreen/>}/>
                <Route path="/cart" element={<CartScreen/>}/>
              </Routes>
            </main>
            {/*  Homescreen */}
            {/*  ProductScreen */}
            {/*  CartScreen */}
      </div>
    </Router>
  );
}

export default App;
