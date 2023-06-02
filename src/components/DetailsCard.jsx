import React from 'react'

const DetailsCard = ({ details, label }) => {
    return (
        <div className='lg:w-1/5 md:w-1/3 sm:w-full m-3 shadow-lg cursor-default py-5 px-3 rounded-xl  bg-white'>
            <p className='text-gray-500 capitalize'>{label}</p>
            <p className='uppercase text-xl mt-2 font-semibold text-green-600'>{details}</p>
        </div>
    )
}

export default DetailsCard