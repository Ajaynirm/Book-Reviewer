import React, { useEffect, useState } from "react";
import { axiosInstance } from "../services/api"
import { useNavigate } from "react-router-dom";

import { Search } from "lucide-react";


const HomePage = () => {
  const navigate = useNavigate();
  const [resData, setResData] = useState(Object);

  const [Books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchWord, setSearchWord] = useState("");
  const [searchInput,setSearchInput]=useState("");

  // const searchInputRef = useRef<HTMLInputElement>(null);
  const image1=`https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?
  semt=ais_hybrid&w=740`  ;
  const image2=`https://img.freepik.com/premium-vector/realistic-open-book-with-white-pages_257312-1108.jpg?
  semt=ais_hybrid&w=740`;
  const image3=`https://img.freepik.com/premium-vector/open-blue-book_251819-703.jpg?
  semt=ais_hybrid&w=740`;
  const image4=`https://img.freepik.com/free-vector/world-book-day-background-with-butterflies-realistic-style_23-2147608600.jpg?
  semt=ais_hybrid&w=740`;
  const image5=`https://img.freepik.com/free-psd/books-stack-icon-isolated-3d-render-illustration_47987-15482.jpg?
  semt=ais_hybrid&w=740`;
  
//   useEffect(() => {
//     if(searchWord==="") return;

//     const searchProduct = async () => {
//       try {
//         console.log("search effect running ")
//         const response = await axiosInstance.get("/Books/search", {
//           params: { page, limit:10, searchWord },
//         });
//         console.log(response.data);
//         setBooks(response.data.Books);
//         setTotalPages(response.data.totalPages);
//         setResData(response);
//       } catch (e) {
//         console.error("Error in fetching searched Books:", e);
//       }
//     };
//     searchProduct();
//   }, [searchWord]);

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        console.log("get Book effect running ")
        const response = await axiosInstance.get("/books");
        console.log(response.data);
        setBooks(response.data);
        setTotalPages(3);
        setResData(response);
      } catch (error) {
        console.error("Error fetching Books:", error);
      }
    };
    getAllProduct();
  }, [page]);

  if (!resData) {
    return (
      <>
        <h2>No data </h2>
      </>
    );
  }

  return (
    <div className="flex flex-col m-2 justify-center items-center">
      <div className="flex  justify-center items-center border rounded-full px-3 py-1 max-w-lg bg-gray-100 focus-within:ring-2 ring-blue-400 w-full">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          // ref={searchInputRef}
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="flex-1 bg-transparent px-2 py-1 outline-none"
        />
        <button 
         className={`ml-2 px-3 py-1 rounded transition 
          ${searchInput.trim() === "" 
            ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
            : "bg-blue-500 hover:bg-blue-600 cursor-default text-white"}
        `}
        disabled={searchInput.trim() === ""}
        onClick={()=>{
          setSearchWord(searchInput)
        }}
        >click</button>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">Books</h1>
      {
        (Books && Books.length>0) ?(<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Books.map((Book, ind) => (
              <div
                key={Book.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                onClick={() => {
                  setCurrBook(Books[ind]);
                  navigate("/show-Book");
                }}
              >
                <img
                  src={(ind%5==0)?image1:(ind%5==1)?image2:(ind%5==2)?image3:(ind%5==3)?image4:image5}
                  alt={Book.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="mt-2 font-semibold">Title: {Book.title}</h2>
                <h4 className=" font-bold">Author: {Book.author}</h4>
                <p className=" ">Description: {Book.description}</p>

              </div>
            ))}
          </div>) :(
            <div className="flex flex-col justify-center items-center">
                <div>No Books Available</div>
                <div>May be Backend Not Connected</div>
            </div>
          )
      }
      

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center space-x-2">
        <button
          onClick={() => {
            setPage((p) => Math.max(p - 1, 1));
            setCurrentPage((p) => Math.max(p - 1, 1));
          }}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => {
                setPage(pageNum);
                setCurrentPage(pageNum);
              }}
              className={`px-3 py-1 rounded ${
                pageNum === currentPage
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => {
            setPage((p) => Math.min(p + 1, totalPages));
            setCurrentPage((p) => Math.min(p + 1, totalPages));
          }}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
