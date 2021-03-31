import React, { useState } from "react"; 

const SearchContacts = () => {
    const [lastname, setLastname] = useState("");
    const [contacts, setContacts] = useState([]); 

    const onSubmitForm = async (e) =>{
        e.preventDefault(); 
        try{

        const response = await fetch(`http://localhost:3002/contacts/?last_name=${lastname}`); 
        const parseResponse = await response.json(); 

        setContacts(parseResponse); 
       
        } catch (err){
         console.log(err.message); 
     }
    };

    const onSubmitButton = () =>{
        contacts.filter(contact =>
            contact.last_name === "lastname").map((contacts.last_name)); 
    }

     return (
        <>
          <div >
            <form onSubmit={onSubmitForm}>
              <input
                type="text"
                name="name"
                placeholder="Search"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
              />
              <button onSubmit={onSubmitButton}>Submit</button>
            </form>
            <table>
              <thead>
                <tr>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(contact => (
                  <tr key={contact.contact_id}>
                    <td>{contact.last_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {contacts.length === 0 && <p>No Results Found</p>}
          </div>
        </>
      );

}

export default  SearchContacts; 