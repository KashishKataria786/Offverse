
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner.jsx';

const RouteChangeSpinner =()=>{
  const location = useLocation();
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    setLoading(true);
    const timeout=  setTimeout(()=>setLoading(false), 1000);
    return ()=>clearTimeout(timeout);
  },[location])

  return loading ? <Spinner/>:null;
}

function App() {

  
  return (
    <>
    <RouteChangeSpinner/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
