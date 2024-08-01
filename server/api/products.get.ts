import { Product } from "~/server/models/product.model";

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const page = parseInt(query.page as string) || 1;
	const limit = parseInt(query.limit as string) || 20;
	const skip = (page - 1) * limit;

	const products = await Product.find().skip(skip).limit(limit);
	const totalProducts = await Product.countDocuments();

	return {
		products,
		totalProducts,
		totalPages: Math.ceil(totalProducts / limit),
		currentPage: page,
	};
});
