// import { useState } from 'react'
import "./App.css";
import { ContactList } from "./pages/ContactList";
// import { TestBang } from "./TestBang";
import { useQuery, gql } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddContact } from "./pages/AddContact";

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

function DisplayLocations() {
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
  if (error) return <p>Error : {error.message}</p>;
  // if (data !== undefined) {
  //   return data.locations.map(({ id, name, description, photo }) => (
  //     <div key={id}>
  //       <h3>{name}</h3>
  //       <img
  //         width="400"
  //         height="250"
  //         alt="location-reference"
  //         src={`${photo}`}
  //       />
  //       <br />
  //       <b>About this location:</b>
  //       <p>{description}</p>
  //       <br />
  //     </div>
  //   ));
  // }
}

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/display" element={<DisplayLocations />} />
            <Route path="/addContact" element={<AddContact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
