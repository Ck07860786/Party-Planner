import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import { Button, Checkbox, Radio } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { Prices } from "./Prices";
import Contribution from "./Contribution";
import useCategory from "../hooks/useCategory";
import { BASE_URL } from "../Helper/PortUrl";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function Home() {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [category] = useCategory();
  const [isFilterVisible, setIsFilterVisible] = useState(false); // state to handle filter visibility

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  const getAllServices = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/service/get-service`
      );
      setServices(data.service);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllServices();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterService();
  }, [checked, radio]);

  const filterService = async () => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/service/filter-services`,
        { checked, radio }
      );
      setServices(data.services); // Ensure you're updating services correctly
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row w-full">
        {/* Dropdown for filters in mobile view */}
        <div className="w-full md:hidden p-4">
          <button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className="w-full flex items-center justify-between bg-black border border-purple-600 px-4 py-2 text-white font-semibold rounded-md"
          >
            Filters {isFilterVisible ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>
          {isFilterVisible && (
            <div className="bg-black mt-4 p-4 rounded-md border border-gray-700">
              <h1 className="text-blue-600 text-xl mt-5 font-Lato">Filter by category</h1>
              <div className="mt-5">
                {categories?.map((c) => (
                  <div className="text-white" key={c._id}>
                    <Checkbox
                      className="text-white"
                      onChange={(e) => handleFilter(e.target.checked, c._id)}
                    >
                      {c.name}
                    </Checkbox>
                  </div>
                ))}
              </div>
              <h1 className="text-blue-600 text-xl mt-5 font-Lato">Filter by prices</h1>
              <div className="mt-3">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices.map((p) => (
                    <div key={p._id} className="text-white">
                      <Radio className="text-white" value={p.array}>
                        {p.name}
                      </Radio>
                    </div>
                  ))}
                </Radio.Group>
                <div className="mt-8">
                  <Button
                    className="bg-blue-500 border-blue-700 shadow-md shadow-blue-600"
                    onClick={() => window.location.reload()}
                  >
                    Reset Filter
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar for filters in larger screens */}
        <div className="hidden md:block w-full md:w-1/4 bg-black mt-10 p-4 md:p-8">
          <h1 className="text-blue-600 text-xl mt-5 font-Lato">Filter by category</h1>
          <div className="mt-5">
            {categories?.map((c) => (
              <div className="text-white" key={c._id}>
                <Checkbox
                  className="text-white"
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              </div>
            ))}
          </div>
          <h1 className="text-blue-600 text-xl mt-5 font-Lato">Filter by prices</h1>
          <div className="mt-3">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices.map((p) => (
                <div key={p._id} className="text-white">
                  <Radio className="text-white" value={p.array}>
                    {p.name}
                  </Radio>
                </div>
              ))}
            </Radio.Group>
            <div className="mt-8">
              <Button
                className="bg-blue-500 border-blue-700 shadow-md shadow-blue-600"
                onClick={() => window.location.reload()}
              >
                Reset Filter
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full md:flex-1">
          <h1 className="text-center font-Lato text-2xl shadow-sm mt-3">
            All Services
          </h1>
          <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {services.length > 0 ? (
                  services.map((s) => (
                    <div
                      key={s._id}
                      className="flex flex-col rounded-lg border shadow-md shadow-purple-500 border-purple-500 p-3 mb-6"
                    >
                      <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-transparent lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img
                            src={s.image.url}
                            alt={s.name}
                            className="object-cover object-center w-full"
                          />
                        </div>
                        <h1 className="text-gray-500 font-Lato text-[15px] py-2">
                          Provider : {s.category}
                        </h1>
                        <div className="flex items-center">
                          <h1 className="text-yellow-300">User Reviews</h1>
                          <Contribution />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="font-Lato text-purple-400 font-bold text-xl">
                              {s.name}
                            </h3>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-white">
                            {s.description.substring(0, 50)}...
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <div>
                          <h1 className="text-2xl font-Lato">{s.price}/-</h1>
                        </div>
                        <Link to={`/service/${s.slug}`}>
                          <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black hover:border-purple-600 border outline-none border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                          >
                            More Detail
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-white items-center h-svh mt-10">
                    <h1 className="font-Lato text-center text-xl">
                      No services found.
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
