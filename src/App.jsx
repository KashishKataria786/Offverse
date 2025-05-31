
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner.jsx';
import AboutPage from './pages/AboutPage.jsx';

const RouteChangeSpinner =()=>{
  const location = useLocation();
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    setLoading(true);
    const timeout=  setTimeout(()=>setLoading(false), 1000);
    return ()=>clearTimeout(timeout);
  },[location])

  return loading ? <Spinner isLoading={loading}/>:null;
}

function App() {

  
  return (
    <>
    <RouteChangeSpinner/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </>
  )
}

export default App
