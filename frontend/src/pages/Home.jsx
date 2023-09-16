import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

import BooksTable from "../components/pages/BooksTable";
import BooksCard from "../components/pages/BooksCard";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  const [showModal, setShowModal] = useState(false);
  const hanldeOnClose = () => {
    setShowModal(false);
    console.log(showModal)
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-400 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>

        <button className="bg-sky-400 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=> setShowType('card')}>
          Card
        </button>

      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/createbook">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? <Spinner /> : showType === "table" ? (<BooksTable books={books} setBooks={setBooks} onClose={hanldeOnClose} showModal={showModal} setShowModal={setShowModal} />) : <BooksCard books={books} setBooks={setBooks} onClose={hanldeOnClose} showModal={showModal} setShowModal={setShowModal}/>}
    </div>
  );
};

export default Home;
