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
		},

		actions: {

			handlerLogin: async(body)=>{
				try{
					const auth = await fetch (`${process.env.BACKEND_URL}api/auth`, {
						method: 'POST',
						body: JSON.stringify(body),
						headers: {
							'Content-Type': 'application/json'
						}
					}) 
					
					if (!auth.ok) throw Error();

					const authJson = await auth.json();
					setStore({ authToken: authJson.token })
					localStorage.setItem( 'token', authJson.token)
					console.log(authJson);
				} catch {
					console.log('Error')
				}

			},

			getUser: async()=>{
				const token = localStorage.getItem('token');

				try{
					const user = await fetch (`${process.env.BACKEND_URL}api/user`,
						{
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
								'Authorization': `Bearer${token}`
							}
						}
					)

					if(!user.ok) return Throw('error get user')
					const userData = await user.json();
					console.log(userData);
					return userData[0];
				}
				catch{
					console.log('error')
				}
			},

			handlerRegister: async (body) => {

				try{
					const register = await fetch (`${process.env.BACKEND_URL}api/user`, {
						method: 'POST',
						body: JSON.stringify(body),
						headers: {
							'Content-Type': 'application/json'
						}
					}) 
					
					if (!register.ok) throw Error();

					const registerJson = await register.json();
					console.log(registerJson);
				} catch {
					console.log('Error')
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

			addFavorite: (product_id) => {
                const favorites = getStore().favorites;
                const newFavorites = [...favorites, product_id];
                setStore({favorites: newFavorites})
            },

			removeFavorite: (product_id) => {
                const favorites = getStore().favorites;
                const newFavorites = favorites.filter(products => products != product_id)
                setStore({favorites: newFavorites})								
            },			
		}
	};
};

export default getState;
