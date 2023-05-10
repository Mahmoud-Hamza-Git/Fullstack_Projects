import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <>
      <div className='logo react'>Hello world</div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/hotels/:id' element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
