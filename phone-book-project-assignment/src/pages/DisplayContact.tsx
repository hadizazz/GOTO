import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { AiOutlineStar, AiOutlineEdit } from "react-icons/ai";
import { BsFillTelephoneFill, BsFillChatLeftTextFill } from "react-icons/bs";
import { BiSolidInfoCircle } from "react-icons/bi";

export const DisplayContact = () => {
  interface ContactInventory {
    created_at: Date;
    first_name: string;
    id: string;
    last_name: string;
    phones: {
      number: number;
    };
  }
  interface LocationsInventoryData {
    contact: ContactInventory[];
  }
  const GET_LOCATIONS = gql`
    query GetContactList(
      $distinct_on: [contact_select_column!]
      $limit: Int
      $offset: Int
      $order_by: [contact_order_by!]
      $where: contact_bool_exp
    ) {
      contact(
        distinct_on: $distinct_on
        limit: $limit
        offset: $offset
        order_by: $order_by
        where: $where
      ) {
        created_at
        first_name
        id
        last_name
        phones {
          number
        }
      }
    }
  `;

  const [show, setShow] = useState(false);
  const showName = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  function DisplayLocations() {
    // const alphabet = ["A","B","C","D","E"];
    const [active, setActive] = useState(false);
    const { loading, error, data } = useQuery<LocationsInventoryData>(
      GET_LOCATIONS
      // {
      //   variables: {
      //     where: {
      //       first_name: { _like: "%John%" },
      //     },
      //   },
      // }
    );
    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (data !== undefined) {
      return data.contact.map(
        ({ id, first_name, last_name, phones: number }) => (
          <div key={id + first_name} className="my-2">
            <div
              onClick={showName}
              className="cursor-pointer bg-gray-300 text-gray-200 uppercase flex justify-between"
            >
              <div className="flex">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#047857] m-2 p-2 ">
                  <span className="text-white font-bold text-2xl">
                    {first_name[0]}
                  </span>
                </div>
                <h1 className="text-black pt-5 px-2 font-bold">
                  {first_name + " " + last_name}
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
                    <span className="font-bold px-2">Mobile</span>{" "}
                  </h1>
                  <div className="flex">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#279EFF] m-2 p-2 ">
                      <span className="text-white font-bold text-2xl">
                        <BsFillTelephoneFill />
                      </span>
                    </div>
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#279EFF] m-2 p-2 ">
                      <span className="text-white font-bold text-2xl">
                        <BsFillChatLeftTextFill />
                      </span>
                    </div>
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#279EFF] m-2 p-2 ">
                      <span className="text-white font-bold text-2xl">
                        <BiSolidInfoCircle />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      );
    }
  }
  return (
    <div>
      <DisplayLocations />
    </div>
  );
};
