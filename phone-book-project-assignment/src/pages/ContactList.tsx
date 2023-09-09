import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillPlusCircleFill, BsSearch } from "react-icons/bs";
import { AiOutlineStar, AiOutlineEdit } from "react-icons/ai";
import { BsFillTelephoneFill, BsFillChatLeftTextFill } from "react-icons/bs";
import { BiSolidInfoCircle } from "react-icons/bi";
import { useQuery, gql } from "@apollo/client";
import { AddContact } from "./AddContact";
import { DisplayContact } from "./DisplayContact";

export const ContactList = () => {
  const [show, setShow] = useState(false);
  const ShowName = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="container lg:w-full ">
      <div className="flex border-b-2 border-black justify-between sm:w-full ">
        <div className="flex m-0 p-0 mb-3">
          <FaUser className="text-3xl" />
          <h1 className="mx-4 text-2xl ">Contact</h1>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch className="mb-1" />
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
            placeholder="Search for users"
          />
        </div>
        <a href="/addContact">
          <BsFillPlusCircleFill className="text-3xl text-[#047857]" />
        </a>
      </div>

      <div>
        <h1 className="m-1 p-1 uppercase">My Profile</h1>
        <div
          onClick={ShowName}
          className="cursor-pointer bg-gray-300 text-gray-200 uppercase flex justify-between"
        >
          <div className="flex">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#047857] m-2 p-2 ">
              <span className="text-white font-bold text-2xl">HC</span>
            </div>
            <h1 className="text-black pt-5 px-2 font-bold">
              Hadiza Cahya Firdaus
            </h1>
          </div>

          <div className="flex pt-1 text-black text-4xl">
            <button type="button">
              <AiOutlineStar className="mx-5 cursor-pointer  hover:bg-yellow-600 " />
            </button>
            <button>
              <AiOutlineEdit className="mx-5 cursor-pointer" />
            </button>
          </div>
        </div>
        {show && (
          <div className="bg-gray-300 text-gray-200  uppercase">
            <div className="container px-16">
              <h1 className="text-black py-2  ">
                <span className="font-bold px-2">Mobile</span> +6287793274328
              </h1>
              <div className="flex">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#279EFF] m-2 p-2 ">
                  <span className="text-white font-bold text-2xl">
                    <BsFillTelephoneFill />
                  </span>
                </div>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#279EFF] m-2 p-2 ">
                  <span className="text-white font-bold text-2xl">
                    {" "}
                    <BsFillChatLeftTextFill />
                  </span>
                </div>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#279EFF] m-2 p-2 ">
                  <span className="text-white font-bold text-2xl">
                    {" "}
                    <BiSolidInfoCircle />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div>
          <h1 className="m-1 p-1 uppercase">favorite</h1>
          <div className="bg-gray-300 text-gray-200 uppercase rounded-md flex justify-between">
            <div className="flex">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#047857] m-2 p-2 ">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <h1 className="text-black pt-5 px-2 font-bold">Diza</h1>
            </div>
            <div className="flex pt-5 text-black text-4xl">
              <button type="button">
                <AiOutlineStar className="mx-5 cursor-pointer  hover:bg-yellow-600 " />
              </button>
              <button>
                <AiOutlineEdit className="mx-5 cursor-pointer" />
              </button>
            </div>
          </div>
        </div> */}

      <div>
        <h1 className="m-1 p-1 uppercase">A</h1>
        <DisplayContact />
      </div>
    </div>
  );
};
