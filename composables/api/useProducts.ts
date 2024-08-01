export default () => {
	// This composable function will be used to fetch products data from the API
	const getAllProducts = async () => {
		const data = await useFetchWithCache("/api/products");
		return data;
	};

	const getCartProducts = async () => {
		const data = await useFetchWithCache("/api/getCartProducts");
		return data;
	};

	const getOneProducts = async () => {
		const data = await useFetchWithCache("/api/getOneProducts");
		return data;
	};

	return {
		getAllProducts,
		getCartProducts,
		getOneProducts,
	};
};
