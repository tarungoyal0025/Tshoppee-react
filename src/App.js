import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import Review from './components/Review';
import Copyright from './components/Copyright';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Product from './components/Product';
import OrderHistory from './components/Orderhistory';
import Description from './components/Description';
import Register from './components/Register';


function App() {
  return (
    <div>
      <Router>
        <Navbar title="T Shoppee" />
        <Routes>
          <Route path="/" element={<div className='bg-light'> <Product /> <Review /> <Contact /></div>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/description" element={<Description />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
        <Copyright />
      </Router>
    </div>
  );
}

export default App;
