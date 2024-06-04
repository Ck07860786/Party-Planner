import React from "react";
import Header from "../layouts/Header";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";


function Categories() {
  const categories = useCategory();
  return (
    <>
    <div className=" bg-black w-full h-svh">
      <Header />
      <div className=" text-center mt-5">
        <h1 className=" text-3xl">All Categories</h1>
      </div>
      <div className=" flex grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
        {categories?.map((c) => (
            <Link to={`/category/${c.slug}`}>
          <div className=" flex m-24 bg-purple-600 border border-purple-600 rounded">

            <div
              type="submit"
              className="rounded-md w-[400px] h-[100px] text-center flex items-center   bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 hover:text-black  outline-none"
            >
                

              {c.name}
            
            </div>
          </div>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
}

export default Categories;
