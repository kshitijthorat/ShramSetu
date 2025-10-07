import React from 'react'

const Cards = ({ image, title, info }) => {
  return (
    <div className="max-w-sm m-5 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500 transition duration-300">
      {/* Image Section */}
      <div className="flex justify-center mt-4">
        <img
          src={image}
          alt={title}
          className="h-60 w-60 rounded-full object-cover border-4 border-blue-500"
        />
      </div>

      {/* Text Section */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{info}</p>
      </div>
    </div>
  )
}

export default Cards