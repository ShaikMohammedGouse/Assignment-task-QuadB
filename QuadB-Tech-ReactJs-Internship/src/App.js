import './App.css';
import Main from './component/Homepage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Summary from './component/Summary';
import { useState } from 'react';
import Book from './component/Book';
function App() {
  const [selectedShow, setSelectedShow] = useState({img:'',name:'',language:'',summary:'',runtime:'',rating:''})
  const [booking, setBooking] = useState(JSON.parse(localStorage.getItem('bookings')) || []);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main selectedShow = {selectedShow} setSelectedShow = {setSelectedShow}/>}></Route>
          <Route exact path='/summary' element={<Summary selectedShow={selectedShow} setSelectedShow={setSelectedShow} />}></Route>
          <Route exact path='/book' element={<Book selectedShow={selectedShow} setSelectedShow={setSelectedShow} setBooking={setBooking}  booking={booking} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
