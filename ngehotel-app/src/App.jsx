import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";

const App = () => {
  // useLocation fungsi dari React Router yang digunakan untuk mengambil informasi URL yang sedang dibuka di browser.
  // .pathname artinya di belakangnya / di url ada ngk includes owner
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {/* jika path bukan owner, tampilkan navbar */}
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
