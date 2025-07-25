import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home';

const App = () => {

  // useLocation fungsi dari React Router yang digunakan untuk mengambil informasi URL yang sedang dibuka di browser.
  // .pathname artinya di belakangnya / di url ada ngk includes owner
  const isOwnerPath = useLocation().pathname.includes('owner');

  return (
    <div >
      {/* jika path bukan owner, tampilkan navbar */}
     {!isOwnerPath && <Navbar />}  
     <div className="min-h-[70vh]">
     <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
     </div>

    </div>
  )
}

export default App
