import React, { useState } from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.webp'
import img6 from '../assets/img6.webp'

function Slider() {
    const content = [
        {
            img: img1,
        },
        {
            img: img2,
        },
        {
            img: img3,
        },
        {
            img: img4,
        },
        {
            img: img5,
        },
        {
            img: img6,
        }
    ]

    return (
        <div className='w-full flex flex-row px-12 py-6'>
            <div className='w-full flex items-center flex-row relative overflow-x-auto'>
            {content.map((item, i) => {
                // make pictures slide
                return (
                    <div className='w-1/2 flex-shrink-0 h-96 p-4 bg-black/20 rounded-xl backdrop-blur-lg ml-4' key={i}>
                        <img src={item.img} alt='img' className='w-full h-80 object-fill rounded-lg' />
                    </div>
                )
            })}
            </div>
            <div className='flex flex-row w-full justify-between absolute top-1/2 left-0 transform -translate-y-1/2 px-24'>
                <button className='bg-white rounded-full w-12 h-12 flex items-center justify-center sticky top-0 left-0 z-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth='2' d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className='bg-white rounded-full w-12 h-12 flex items-center justify-center sticky top-0 right-0 z-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth='2' d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Slider