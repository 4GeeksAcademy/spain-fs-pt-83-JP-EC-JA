const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [],
			categories: [],
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
			

			

		}
	};
};

export default getState;
