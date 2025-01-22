const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [],
			categories: [],
			men: [],
			jewelery: [],
		},

		actions: {
			loadProducts: () => {
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


		}
	};
};

export default getState;
