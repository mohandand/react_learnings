import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./components/MenuComponent"

function App() {
  
  return (
    <div className="App">
      <Navbar dark color="primary"> 
          <div>
              <NavbarBrand href="/">Mohan Dandigam</NavbarBrand>
          </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
