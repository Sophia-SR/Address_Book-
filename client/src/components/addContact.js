import React from 'react'

const AddContact = () => {

const[firstName, setFirstName] = React.useState("");
const[lastName, setLastName] = React.useState(""); 
const[phoneNumber, setPhoneNumber] = React.useState(""); 
const[email, setEmail] = React.useState(""); 

const onSubmitForm = async (e) => {
    e.preventDefault();
    try{
        const body = { "first_name": firstName, "last_name": lastName, "phone_number": phoneNumber, "email": email} 
        console.log(JSON.stringify(body));
        const response = await fetch("http://localhost:3002/contacts", {
            method: "POST", 
            headers: { "Content-Type" : "application/json",
                       "Accept": "application/json"
                    },body: JSON.stringify(body)
        });
        window.location = "/";
        return response.json();
    } catch (err) {
        console.error(err.message); 
    }

};

    return (
        <>
        <div>
        <h1 id="title">Address Book</h1>
    <h2>New Contact</h2>
    <form onSubmit={onSubmitForm}>
          <label>First Name</label>
          <input type="text" placeholder="First Name"  value={firstName} onChange={e => setFirstName(e.target.value)}/>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          <label>Email</label>
          <input type="text" placeholder="Email"  value={email} onChange={e => setEmail(e.target.value)} />
          <br></br>
          <button type="submit">Submit</button>
          </form>
        </div>
        </>
    )
}

export default AddContact;
