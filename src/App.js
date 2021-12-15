import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import AddToCart from './components/pages/addToCart/AddToCart';
import Header from './components/pages/Header/Header';
import Movies from './components/pages/movies/Movies';
import SingleMovie from './components/pages/SingleMovie/SingleMovie';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/details/:id' element={<SingleMovie />} />
          <Route path='/Cart' element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
