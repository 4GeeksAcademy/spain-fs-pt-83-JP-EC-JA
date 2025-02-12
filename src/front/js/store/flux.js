const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [],
			categories: [],
			men: [],
			jewelery: [],
			woman: [],
			electronics: [],
			productdetail: null,
			favorites: [],
			user: null,
		},

		actions: {

			handlerLogin: async (body) => {
				try {
					const auth = await fetch(`${process.env.BACKEND_URL}api/auth`, {
						method: 'POST',
						body: JSON.stringify(body),
						headers: { 'Content-Type': 'application/json' }
					});

					if (!auth.ok) throw new Error("Error en la autenticación");

					const authJson = await auth.json();
					setStore({ authToken: authJson.token });
					localStorage.setItem("token", authJson.token);

					const user = await getActions().getUser();
					setStore({ user });

					console.log("login:", user);

				} catch (error) {
					console.log("Error en login:", error);
				}
			},



			handlerLogout: () => {
				localStorage.removeItem("token"); // Elimina el token
				setStore({ authToken: null, user: null }); // Limpia el usuario en el store
			},


			getUser: async () => {
				const token = localStorage.getItem("token");

				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/user`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${token}`
						}
					});

					if (!response.ok) throw new Error("Error obteniendo usuario");

					const userData = await response.json();
					console.log(userData)
					const userFavorite = userData.favorites.map(item => item.product_id)

					setStore({ user: userData, favorites: userFavorite });
					return userData;

				} catch (error) {
					console.log("Error obteniendo usuario:", error);
					return null;
				}
			},



			handlerRegister: async (body) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/user`, {
						method: 'POST',
						body: JSON.stringify(body),
						headers: {
							'Content-Type': 'application/json'
						}
					});

					if (!response.ok) {
						const errorData = await response.json();
						console.error("Error en el registro:", errorData);
						return false;
					}

					const registerJson = await response.json();
					console.log("Usuario registrado:", registerJson);
					return true;

				} catch (error) {
					console.error("Error inesperado en el registro:", error);
					return false;
				}
			},


			loadShopAll: () => {
				const store = getStore();

				if (store.products.length === 0) {
					fetch('https://fakestoreapi.com/products/')
						.then(res => res.json())
						.then(respJson => {
							const response = respJson;
							setStore({ products: response })
						})
				}
			},

			loadCategories: () => {
				const store = getStore();

				if (store.categories.length === 0) {
					fetch('https://fakestoreapi.com/products/categories')
						.then(res => res.json())
						.then(respJson => {
							const response = respJson;
							setStore({ categories: response })
						})
				}
			},

			loadTendenciaMen: () => {
				const store = getStore();

				if (store.men.length === 0) {
					fetch(`https://fakestoreapi.com/products/category/men's clothing`)
						.then(res => res.json())
						.then(respJson => {
							const response = respJson;
							setStore({ men: response })
						})
				}
			},

			loadTendenciaJewelery: () => {
				const store = getStore();

				if (store.jewelery.length === 0) {
					fetch(`https://fakestoreapi.com/products/category/jewelery`)
						.then(res => res.json())
						.then(respJson => {
							const response = respJson;
							setStore({ jewelery: response })
						})
				}
			},

			loadWomansClothes: () => {
				const store = getStore();

				if (store.woman.length === 0) {
					fetch(`https://fakestoreapi.com/products/category/women's clothing`)
						.then(res => res.json())
						.then(respJson => {
							const response = respJson;
							setStore({ woman: response })
						})
				}
			},

			loadElectronics: () => {
				const store = getStore();

				if (store.electronics.length === 0) {
					fetch(`https://fakestoreapi.com/products/category/electronics`)
						.then(res => res.json())
						.then(respJson => {
							const response = respJson;
							setStore({ electronics: response })
						})
				}
			},

			loadProductDetail: (id) => {
				fetch(`https://fakestoreapi.com/products/${id}`)
					.then(res => res.json())
					.then(respJson => {
						const response = respJson;
						setStore({ productdetail: response });
					})

			},

			addFavorite: async (product_id) => {
				const token = localStorage.getItem('token')
				fetch(`${process.env.BACKEND_URL}api/favorite`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({ product_id })
				}).then((res) => {
					if (res.ok) {
						const favorites = getStore().favorites;
						const newFavorites = [...favorites, product_id];
						setStore({ favorites: newFavorites })
					}
				})
			},

			removeFavorite: async (product_id) => {
				const token = localStorage.getItem('token')
				fetch(`${process.env.BACKEND_URL}api/favorite/${product_id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`
					},

				}).then((resp) => {
					if (resp.ok) {
						const favorites = getStore().favorites;
						const newFavorites = favorites.filter(products => products != product_id)
						setStore({ favorites: newFavorites })

					}
				})
			},
		}
	};
};

export default getState;
