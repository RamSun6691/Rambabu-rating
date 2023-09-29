
import BookingApp from './BookingApp/BookingApp';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StoreList from './BookingApp/StoreList';
import Card from './Card/Card';
import Flipcart from './Flipcart/Flipcart';
import Facebook from './Facebook/Facebook';

function App() {
  return (
    <>
    <Facebook />
    {/* <Flipcart /> */}
    {/* <Card /> */}
    {/* <BrowserRouter >
    <Routes>
      <Route path='/' element={<BookingApp />} />
      <Route path='/storelist' element={<StoreList />} />
      
    </Routes>
     
    </BrowserRouter> */}
    </>
  );
}

export default App;
