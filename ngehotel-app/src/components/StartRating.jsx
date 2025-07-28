import React from 'react'
import { assets } from '../assets/assets'


const StartRating = ({rating = 4}) => {
  return (
    <>
    {/* Array(5) Membuat array dengan panjang 5: */}
    {/* .fill('') Mengisi semua elemen array dengan string kosong: *  ["", "", "", "", ""]/}  
    {/* indexnya berupa angka index dari 0 sampai 4 */}
       {Array(5).fill('').map((_,  index) => (
         <img key={index} src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="start-icon" className='w-4.5 h-4.5' />
       ))} 
    </>
  )
}

export default StartRating
