import React,{useState} from 'react'
import Modal from "../Modal";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksTable = ({books,setBooks,onClose,showModal,setShowModal}) => {
    const [id,setId] = useState('');
    
  return (
    <>
         <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish year
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8 hover:bg-slate-400">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/showbook/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/edithbook/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-500" />
                    </Link>
                    <Link onClick={() => {
                      setShowModal(true);
                      setId(book._id);
                    }}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                    <Modal
                      visible={showModal}
                      onClose={onClose}
                      id={id}
                      setBooks={setBooks}
                      books={books}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}

export default BooksTable