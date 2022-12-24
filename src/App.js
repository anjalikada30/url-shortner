import React, { Suspense } from 'react';
import './App.css';
import { Header, Loader } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomeComponent = React.lazy(() => import('./pages/home/Home'));
const ContactComponent = React.lazy(() => import('./pages/contact/Contact'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/contact' element={<ContactComponent />} />
        </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
