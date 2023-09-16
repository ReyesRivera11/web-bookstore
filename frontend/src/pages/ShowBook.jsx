import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [showBook, setShowBook] = useState({});
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setShowBook(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">ID</span>
            <span>{showBook._id}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">TITLE</span>
            <span>{showBook.title}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{showBook.author}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">PUBLISH YEAR</span>
            <span>{showBook.publishYear}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">CREATE TIME</span>
            <span>{new Date(showBook.createdAt).toString()}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">LAST UPDATE TIME</span>
            <span>{new Date(showBook.updatedAt).toString()}</span>
          </div>

        </div>
      )}
    </div>
  );
};

export default ShowBook;
