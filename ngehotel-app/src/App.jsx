import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/addRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

const App = () => {
  // useLocation fungsi dari React Router yang digunakan untuk mengambil informasi URL yang sedang dibuka di browser.
  // .pathname artinya di belakangnya / di url ada ngk includes owner
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {/* jika path bukan owner, tampilkan navbar */}
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}

      {/* kenapa di bungkus dengan div h-70vh??..., karena untuk Membantu penataan layout Khususnya dalam layout header → konten → footer, kita sering pakai min-h supaya kontennya "mengisi ruang" dan footer tidak naik ke tengah jika isi konten pendek. */}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />

          {/* /owner dia akan menjadi default layout */}
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>

        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
