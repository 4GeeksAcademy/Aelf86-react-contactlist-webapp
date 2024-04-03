import { ids } from "webpack";

const apiUrl = process.env.API_URL
const getState = ({ getStore, getActions, setStore }) => {
	return {
		// defino estados globales variables que se pueden editar sin recargar pagina
		//el store son variables dinamicas globales (pueden cambiar en el transcurso de la app)
		store: {
			contacts: [],
			agenda_slug: "Alfredo"

		},
		actions: {

			// Use getActions to call a function within a fuction
			createAgenda: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${apiUrl}/agendas/${store.agenda_slug}`, {
						method: "POST"
					})
					const data = await response.json()
					if (response.ok) {
						console.log(data)
					}
					console.log(data)
				} catch (error) {
					console.log(error)
				}
			},

			getContacts: async () => {
				const store = getStore()
				try {
					// https://playground.4geeks.com/contact/agendas/Agenda_Alfredo
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Alfredo/contacts")
					//(`${apiUrl}/agendas/${store.agenda_slug}`)
					const data = await response.json()
					if (response.ok) {
						console.log(data)
						setStore({ contacts: data.contacts })
						return true
					}
					setStore({ contacts: false })
					console.log(data)
					return false
				} catch (error) {
					console.log(error)
					return false
				}
			},

			addContact: async (name, phone, email, address) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Alfredo/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address
						})

					})
					const data = await response.json()
					console.log(data)
				} catch (error) {
					console.log(error)
				}
			},
			deleteContact: async (id) => {
				try {
					const response = await fetch ("https://playground.4geeks.com/contact/agendas/Alfredo/contacts/"+id, {
						method:"DELETE",
						headers: { "Content-Type": "application/json" },
					})
					const data = await response.json()
					console.log(data)
				} catch (error) {
				console.error(error)
				}
			}

		}
	};
};

export default getState;
