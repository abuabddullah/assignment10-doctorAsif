// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/homePages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/sharedPages/Footer/Footer';
import NavigationBar from './pages/sharedPages/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="mainApp">
      {/* <FontAwesomeIcon icon={faCartShopping} /> */}

      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


      <Footer />

    </div>
  );
}

export default App;
