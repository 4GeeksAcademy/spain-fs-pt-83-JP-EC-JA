const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [],
			categories: [],
			men: [],
			jewelery: [],
			woman: [],
			electronics: [],
			favorites: [],
		},

		actions: {
			loadShopAll: () => {
				const store = getStore();

				if (store.products.length === 0) {
					fetch('https://fakestoreapi.com/products')
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

			addFavorite: (id) => {
                const favorites = getStore().favorites;
                const newFavorites = [...favorites, id];
                setStore({favorites: newFavorites})
            },

			removeFavorite: (id) => {
                const favorites = getStore().favorites;
                const newFavorites = favorites.filter(products => products != id)
                setStore({favorites: newFavorites})								
            },
		}
	};
};

export default getState;
