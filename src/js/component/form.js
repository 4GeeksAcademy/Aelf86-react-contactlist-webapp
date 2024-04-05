import React, {useContext, useEffect, useState}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const FormContact = () => {
	const {actions, store} = useContext (Context)
    const [name, setName] = useState ("")
	const [phone, setPhone] = useState ("")
	const [email, setEmail] = useState ("")
	const [address, setAddress] = useState ("")
	
	const addContact = (e) => {
		e.preventDefault()
		console.log(name,phone,email, address)
		if (name !="" && phone !="" && email!="" && address!=""){

			actions.addContact(name,phone,email,address)
		} else {
			alert("Data is missing")
		}
	}

	return (
	<div className="text-center mt-5 container">
		<h1>Add new contact</h1>
		<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">name</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Your name" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">address</label>
    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Your last name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">phone</label>
    <input value={phone} onChange={(e) => setPhone(e.target.value)}type="text" className="form-control" placeholder="Your phone number" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">email</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Your email"/>
  </div>
  <button onClick={(e) => addContact(e)} className="btn btn-success">Save</button>
</form>
	</div>
	)
}