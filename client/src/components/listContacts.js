import React from "react";
import { useState } from "react";
const ListContacts = () => {
  const [contacts, setContacts] = useState([]);
  const getList = async () => {
    try {
      const response = await fetch("http://localhost:3002/contacts");
      const jsonData = await response.json();
      setContacts(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  React.useEffect(() => {
    getList();
  }, []);

  console.log(contacts);
  return (
    <>
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {sightings.map(sightings => (
        <tr key={sightings.sighting_id} >
        <td>{sightings.animal_nickname}</td>
        </tr>
        ))} */}
          {contacts.map((contact) => (
            <tr>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.phone_number}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListContacts;
