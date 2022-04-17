// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Checkout from './pages/Checkout/Checkout';
import SingleServiceDetails from './pages/Checkout/SingleServiceDetails/SingleServiceDetails';
import useServices from './pages/customHooks/useServices/useServices';
import Home from './pages/homePages/Home/Home';
import Loading from './pages/Loading/Loading';
import Login from './pages/Login-SignUP-RequireAuth/Login/Login';
import RequireAuth from './pages/Login-SignUP-RequireAuth/RequireAuth/RequireAuth';
import Signup from './pages/Login-SignUP-RequireAuth/Signup/Signup';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/sharedPages/Footer/Footer';
import NavigationBar from './pages/sharedPages/NavigationBar/NavigationBar';



export const Services4Context = createContext()


function App() {
  const { services, setServices } = useServices();
  // console.log(services);
  return (
    <Services4Context.Provider value={{ services, setServices }}>
      <div className="mainApp">
        {/* <FontAwesomeIcon icon={faCartShopping} /> */}

        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/checkout" element={
          <RequireAuth>
          <Checkout />
          </RequireAuth>
          } >
            <Route path=":id" element={<SingleServiceDetails />} />
          </Route>

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        

        <Footer />

      </div>
    </Services4Context.Provider>
  );
}

export default App;
