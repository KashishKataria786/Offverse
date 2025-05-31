
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import { useEffect, useState } from 'react';
import Spinner from './components/common/Spinner.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ServicePgae from './pages/ServicePgae.jsx';
import NotFound from './pages/NotFound.jsx';

const RouteChangeSpinner =()=>{
  const location = useLocation();
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    setLoading(true);
    const timeout=  setTimeout(()=>setLoading(false), 1000);
    return ()=>clearTimeout(timeout);
  },[location])

  return loading ? <Spinner isLoading={loading} setLoading={setLoading}/>:null;
}

function App() {

  
  return (
    <>
    <RouteChangeSpinner/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/portfolio' element={<PortfolioPage/>}/>
      <Route path='/services' element={<ServicePgae/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
