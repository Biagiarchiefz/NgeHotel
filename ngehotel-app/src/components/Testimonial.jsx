import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StartRating from './StartRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-24 bg-slate-50 pt-20 pb-30'>
      <Title title="What Our Guests Say" subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ullam sint quos perferendis quod ipsam suscipit. Cupiditate, quis. Praesentium, officia!"/>
      
         <div className="flex flex-wrap items-center gap-6 mt-20">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                           <StartRating rating={testimonial.rating}/>
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Testimonial
