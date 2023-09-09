import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineStar, AiOutlineEdit } from "react-icons/ai";
import { MouseEvent } from "react";

export const AddContact = () => {
  const handleClick = (e: MouseEvent) => {
    console.log("Titit");
    console.log(e);
  };

  return (
    <div className="container ">
      <div className="border-b-2 border-black">
        <a href="/" className="">
          <IoChevronBackSharp className="text-3xl my-5 " />
        </a>
      </div>
      <div className="flex">
        <div className=" px-3 text-start">
          <div className="lg:py-16 lg:px-20 md:p-14 p-5">
            <div className="flex items-center justify-center h-32 w-32 rounded-full bg-[#047857] m-2 p-2 ">
              <span className="text-white font-bold text-2xl">HC</span>
            </div>
          </div>
        </div>

        <div className="mt-20 ">
          <form
            action="https://getform.io/f/2fe01e7d-485b-41fc-9200-a4a3b5365788"
            method="POST"
            className="flex flex-col w-96 p-2"
          >
            <div className="flex bg-gray-300 p-2 rounded-xl">
              <FaUser className="text-4xl mx-2" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className=" px-10 bg-transparent rounded-md focus:outline-none"
                required
              />
            </div>

            <div className="flex bg-gray-300 p-2 my-4 rounded-xl">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <select id="phone" className="bg-gray-300 text-sm p-2">
                <option value="mobile">Mobile</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
              </select>
              <input
                type="text"
                name="name"
                placeholder="Enter your phone number"
                className=" px-3 bg-transparent rounded-md focus:outline-none"
                required
              />
            </div>

            <div>
              <div className="bg-gray-300 text-gray-200 uppercase rounded-xl flex justify-between my-2 p-1">
                <div className="flex">
                  <div className="p-2">
                    <button type="button" onClick={handleClick}>
                      <BsFillPlusCircleFill className="text-3xl text-[#047857]" />
                    </button>
                  </div>
                  <h1 className="text-black pt-3 px-3 font-semibold">
                    Add new phone number
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex ">
              <button className="shadow dark:bg-[#cf142b] text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Cancel
              </button>
              <button className="shadow dark:bg-[#04AA6D] text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
