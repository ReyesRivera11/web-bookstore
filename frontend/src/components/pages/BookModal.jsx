import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import {MdVpnKey} from "react-icons/md"



const BookModal = ({books,onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        <div onClick={e => e.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
            <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose}/>

            <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
            {books.publishYear}
          </h2>

          <div className="flex justify-start items-center gap-x-2 mt-8">
            <MdVpnKey className="text-red-300 text-2xl" />
            <h4 className="my-2 text-gray-500 "> {books._id} </h4>
          </div>

          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="my-1">{books.title}</h2>
          </div>

          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="my-1">{books.author}</h2>
          </div>

          <p className='mt-4'>Hi this is a lorem</p>
          <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda autem numquam officiis est! Cum dolorum dicta odit debitis necessitatibus nemo, adipisci repellendus saepe iure facilis! A numquam doloribus temporibus?</p>

        </div>
    </div>
  )
}

export default BookModal