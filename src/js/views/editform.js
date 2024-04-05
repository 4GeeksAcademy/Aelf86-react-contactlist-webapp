import React, {useContext, useEffect, useState}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom"
export const Editform = () => {
	const {actions, store} = useContext (Context)
    const [name, setName] = useState ("")
	const [phone, setPhone] = useState ("")
	const [email, setEmail] = useState ("")
	const [address, setAddress] = useState ("")
	const {id}=useParams()
	const editContact = (e) => {
		e.preventDefault()
		console.log(name,phone,email, address)
		if (name !="" && phone !="" && email!="" && address!=""){

			actions.editContact(name,phone,email,address,id)
            actions=getContact()
		} else {
			alert("Data is missing")
		}
	}

	return (
	<div className="text-center mt-5 container">
		<h1>Edit Contact</h1>
		<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Edit name" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">address</label>
    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Edit address"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">phone</label>
    <input value={phone} onChange={(e) => setPhone(e.target.value)}type="text" className="form-control" placeholder="Edit phone number" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">email</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Edit email address"/>
  </div>
  <button onClick={(e) => editContact(e)} className="btn btn-success">Save</button>
</form>
	</div>
	)
}