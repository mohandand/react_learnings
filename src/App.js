import React, { useState }  from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./components/MenuComponent"
import { DISHES } from './Shared/dishes.js'

function App() {
  const[dishes ,setDishes] = useState(DISHES)
  return (
    <div className="App">
      <Navbar dark color="primary"> 
          <div>
              <NavbarBrand href="/">Mohan Dandigam</NavbarBrand>
          </div>
      </Navbar>
      <Menu dishes={dishes}/>
    </div>
  );
}

export default App;
