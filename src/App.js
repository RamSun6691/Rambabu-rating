
import BookingApp from './BookingApp/BookingApp';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StoreList from './BookingApp/StoreList';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<BookingApp />} />
      <Route path='/storelist' element={<StoreList />} />
      
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
