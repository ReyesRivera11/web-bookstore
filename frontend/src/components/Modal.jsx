import React from "react";
import axios from "axios";
import { VscTrash, VscCheck, VscChromeClose } from "react-icons/vsc";

const Modal = ({ visible, onClose, id,setBooks,books }) => {
  if (!visible) return null;

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((response) => {
        const res = response.request.status;
        if(res === 200){
            setBooks(books.filter(book => book._id !== id));
            console.log(books);
            console.log("Deleted successfully")
        }
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err)
      });
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded">
        <p>Do you want to delete this book?</p>
        <VscTrash className="text-8xl m-auto text-red-700" />

        <div className="flex justify-around my-4 gap-x-2">
          <button className="bg-red-500 w-[50%] rounded-md" onClick={()=>{
            handleDeleteBook();
            onClose();
          }}>
            <VscCheck className="text-2xl font-bold m-auto" />Delete
          </button>
          <button onClick={onClose} className="bg-slate-200 w-[50%] rounded-md">
            <VscChromeClose className="text-2xl m-auto" /> Cancel
          </button>
        </div>
       

      </div>
    </div>
  );
};

export default Modal;
