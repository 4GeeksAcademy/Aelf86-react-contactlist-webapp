import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { actions, store } = useContext(Context)
	useEffect(() => {
		actions.createAgenda()
		actions.getContacts()
	}, [])
	//console.log(store.contacts);
	const deleteContact = (id) => {
		actions.deleteContact(id)
		actions.getContacts()
	}
	return (
		<div className="text-center mt-5 container">
			{store.contacts.map((
				item, index
			) => (

				<div key={index} className="card mb-3 d-flex" style={{ maxWidth: "540px" }}>

					<div className="row g-0">
						<div className="col-md-4">
							<img src="https://picsum.photos/200/300" className="img-fluid rounded-start" alt="User's picture" />
						</div>
						<div className="col-md-8">
							<div className="card-body " >

								<button onClick={() => deleteContact(item.id)} className="btn btn-outline-dark float-end m-1">
									<i className="fas fa-trash">
									</i>
								</button>

								<Link to={`/edit/${item.id}`}>
								<button onClick={() => editContact(item.id)} className="btn btn-outline-dark float-end m-1">
									<i class="fas fa-pen">
									</i>
								</button>
								</Link>
								<p className="card-title">{item.name}</p>
								<p className="card-title">{item.phone}</p>
								<p className="card-text">{item.email}</p>
								<p className="card-text">{item.address}</p>
								<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}