import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookTicket from './components/BookTicket';
import Payment from './components/Payment';
import { MovieContextProvider } from './context/BookingContext';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import About from './components/About';
function App() {
  return (
    <>
    <MovieContextProvider>    
    <Router>
    <Navbar/>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/log' element={<Login/>}></Route>
    <Route path='/reg' element={<Registration/>}></Route>
    <Route path="/book-ticket" element = {<BookTicket/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    </Routes>
    </Router>
    </MovieContextProvider>
    </>
  );
}

export default App;
