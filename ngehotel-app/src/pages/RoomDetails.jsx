import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StartRating from "../components/StartRating";

const RoomDetails = () => {
  // kenapa menggunakan nilai awal statenya null??..., Karena null lebih aman dan jelas dipakai sebagai penanda bahwa data belum tersedia, dibandingkan langsung pakai object kosong ({}).
  // kenapa tidak menggunakan object kosong??..., karena room selalu dianggap ada (karena {} adalah truthy), padahal belum ada data sebenarnya. Itu bisa bikin error di tempat lain

  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  // find() adalah method array di JavaScript yang digunakan untuk mencari satu elemen pertama dalam array yang memenuhi suatu kondisi.
  useEffect(() => {
          // untuk mencari data detail dari id yang sesuai
          const room = roomsDummyData.find((room) => room._id === id)  //Cari satu object room di dalam array roomsDummyData yang room._id-nya sama dengan id.
          room && setRoom(room);
          room && setMainImage(room.images[0]);
       
  }, [])
  
     console.log(mainImage);

     // room && artinya jika datanya sudah ada baru render componentnya

  return room && (  
  <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
   
     {/* room Details */}
     <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
      <h1 className="text-3xl md:text-4xl font-playfair">{room.hotel.name} <span className="font-inter text-sm">({room.roomType})</span> </h1>
      <p className="text-sm font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">20% OFF</p>
     </div>

     {/* room Raiting */}
     <div className="flex items-center gap-1 mt-2">
      <StartRating/>   
      <p>200+ previews</p>
     </div>

     {/* room address */}
     <div className="flex items-center gap-1 text-gray-500 mt-2">
         <img src={assets.locationIcon} alt="location" />
         <span>{room.hotel.address}</span>
     </div>

      {/* room images */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">

         <div className="lg:w-1/2 w-full">
            <img src={mainImage} alt="" className="w-full rounded-xl shadow-lg object-cover" />
         </div>
         
         <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {/* room? itu merupakan option chaining untuk mengecek apakah room ada atau tidak */}
            {room?.images.length > 1 && room.images.map((image, index) => (
               <img onClick={() => setMainImage(image)} key={index} src={image} alt="Room Image" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image  && 'outline-4 outline-orange-500'}`}/>
            )) }
         </div>
      </div>

      {/* Room haiglight */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
         <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">Experience Luxury Like Never Before</h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
               {room.amenities.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center px-3 py-2 rounded-lg bg-gray-100">
                     {/* kita mengakses facilityIcons yang merupakan object yang isinya icon dengan key String, makan kita menggunakan bracket notation untuk mengaksesnya */}
                     <img src={facilityIcons[item]} alt="" className="w-5 h-5" />
                     <p>{item}</p>
                  </div>
               ))}
            </div>
         </div>

     {/* Room Price   */}
     <p className="text-2xl font-medium">${room.pricePerNight}/night</p>

      </div>
                  
    {/* CheckIn CheckOut Form                   */}
    <form action="" className="flex flex-col md:flex-row items-center md:items-center justify-between bg-white shadow-[0px_0px_20px,rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
      <div className="">

      </div>
      <button type="submit">Book Now</button>
    </form>


  </div>
  );
}
export default RoomDetails;