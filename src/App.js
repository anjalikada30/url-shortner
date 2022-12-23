import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Contact } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
