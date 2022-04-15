import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/service/:serviceid' element={<ServiceDetail />} />
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
