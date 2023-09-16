import React, { useState,useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
const EdithBook = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loadings, setloadings] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    setloadings(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      setauthor(res.data.author);
      settitle(res.data.title);
      setpublishYear(res.data.publishYear);
      setloadings(false);
    })
    .catch(err =>{
      setloadings(false);
      alert("An error occurred. Please check the error in the console");
      console.log(err);
    })
  },[])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setloadings(false);
        navigate("/");
      })
      .catch((err) => {
        setloadings(false);
        alert(
          "An error occurred, please check the console for more information"
        );
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4 text-center">Edit book</h1>
      {loadings ? <Spinner /> : null}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setpublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}> Save </button>

      </div>
    </div>
  );
};

export default EdithBook;
