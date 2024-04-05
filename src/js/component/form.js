import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const FormContact = () => {
	const { actions, store } = useContext(Context)
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [address, setAddress] = useState("")

	const addContact = (e) => {
		e.preventDefault()
		console.log(name, phone, email, address)
		if (name != "" && phone != "" && email != "" && address != "") {

			actions.addContact(name, phone, email, address)
		} else {
			alert("Data is missing")
		}
	}

	return (
		<div className="text-center mt-5 container p-3 mb-2 bg-info text-dark">
			<h1>Add new contact</h1>
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" className="form-label float-start">Name</label>
					<input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Your name" aria-describedby="emailHelp" />

				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label float-start">Address</label>
					<input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Your last name" />
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" className="form-label float-start">Phone</label>
					<input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="Your phone number" aria-describedby="emailHelp" />

				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label float-start">Email</label>
					<input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Your email" />
				</div>
				<button onClick={(e) => addContact(e)} className="btn btn-success">Save</button>
			</form>
		<Link to="/">
			<span>Or go back to contacts</span>
		</Link>

		</div>


	)
}