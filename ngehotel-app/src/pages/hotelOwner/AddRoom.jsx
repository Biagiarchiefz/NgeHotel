import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [input, setInput] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <form>
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsa earum tenetur, iste iure natus aperiam architecto doloremque, corrupti odit fuga eius assumenda quaerat deserunt."
      />
      {/* Upload Area For Images */}
      <p className="text-gray800 mt-10-">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {/* Object.key(images) digunakan untuk mengamilkan key-key dari object images dan diletakkan di dalam array dan key tersebut diubah menjadi string, hasilnya seperti ini -> ['1', '2', '3', '4'] */}
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img
              className="max-h-13 cursor-pointer opacity-80"
              src={
                // mengakses object dengan metode braket notation
                images[key] // ingat initial state images itu null, jadi ketika images[key] ada datanya, maka kita akan tampilkan gambar yang kita upload dari input, jika tidak ada datanya, maka akan di render assets.uploadArea
                  ? URL.createObjectURL(images[key]) // URL.createObjectURL(images[key]) adalah fungsi JavaScript yang digunakan untuk menampilkan file lokal (seperti gambar/video) secara langsung di browser, tanpa perlu mengupload-nya dulu ke server.
                  : assets.uploadArea
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              onChange={
                (e) => setImages({ ...images, [key]: e.target.files[0] }) // e.target.files[0] adalah object file yang diupload oleh pengguna.   // tanya emang bener?
              }
              className="hidden"
            />
          </label>
        ))}
      </div>

      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>

          {/* { ...input, roomType: e.target.value }  artinya ambil properti key dan value dari input, lalu ganti key roomType: e.target.value, kalau key roomType sebelumnya tidak ada, maka tambahkan key roomType dan valuenya dari input user*/}
          <select
            value={input.roomType}
            onChange={(e) => setInput({ ...input, roomType: e.target.value })}
            name=""
            id=""
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div className="">
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-24"
            value={input.pricePerNight}
            onChange={(e) =>
              setInput({ ...input, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      <p className="text-gray-800 mt-4">Amenities</p>
      <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
        {Object.keys(input.amenities).map((amenitiy, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`amenities${index + 1}`}
              checked={input.amenities[amenitiy]}
              onChange={(e) =>
                setInput({
                  ...input,
                  amenities: {
                    ...input.amenities,
                    [amenitiy]: !input.amenities[amenitiy],
                  },
                })
              }
            />
            <label htmlFor={`amenities${index + 1}`} className="">{amenitiy}</label>
          </div>
        ))}
      </div>

        <button className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer">Add Room</button>

    </form>
  );
};

export default AddRoom;
