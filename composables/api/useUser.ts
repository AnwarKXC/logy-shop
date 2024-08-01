import { toast } from "vue3-toastify";

export default () => {
	const currentUser = useCurrentUser();

	const getUser = async () => {
		if (!currentUser.value) return null;
		try {
			const { data } = await useFetch("/api/getUser", {
				method: "GET",
				headers: {
					firebaseUid: currentUser.value.uid,
					name: currentUser.value.displayName ?? "Anonymous",
					email: currentUser.value.email ?? "",
				},
			});
			return data.value;
		} catch (error: any) {
			console.log("error in getUser", error);
			toast.error("Failed to fetch user information");
			return null;
		}
	};

	const addToCart = async (productId: string, quantity = 1) => {
		if (!currentUser.value) {
			let cart = JSON.parse(localStorage.getItem("cart") || "[]");
			const cartItemIndex = cart.findIndex(
				(item: { product: string }) => item.product === productId,
			);

			if (cartItemIndex > -1) {
				cart[cartItemIndex].quantity += quantity;
			} else {
				cart.push({ product: productId, quantity });
			}

			localStorage.setItem("cart", JSON.stringify(cart));
			toast.success("Product added to cart locally");
		} else {
			try {
				await $fetch("/api/cart", {
					method: "POST",
					body: {
						userId: currentUser.value.uid,
						items: [{ product_id: productId, quantity }],
					},
				});
				toast.success("Product added to cart");
			} catch (error: any) {
				toast.error(error.message || "Failed to add product to cart");
			}
		}
	};

	const updateCartItem = async (productId: string, quantity: number) => {
		if (!currentUser.value) {
			let cart = JSON.parse(localStorage.getItem("cart") || "[]");
			const cartItemIndex = cart.findIndex(
				(item: { product: string }) => item.product === productId,
			);

			if (cartItemIndex > -1) {
				cart[cartItemIndex].quantity = quantity;
				localStorage.setItem("cart", JSON.stringify(cart));
				toast.success("Cart item updated locally");
			} else {
				toast.error("Product not found in cart");
			}
		} else {
			try {
				await $fetch("/api/cart", {
					method: "PUT",
					body: { userId: currentUser.value.uid, productId, quantity },
				});
				toast.success("Cart item updated");
			} catch (error: any) {
				toast.error(error.message || "Failed to update cart item");
			}
		}
	};

	const getCart = async () => {
		if (!currentUser.value) {
			const cart = localStorage.getItem("cart");
			return cart ? JSON.parse(cart) : [];
		} else {
			try {
				const { data } = await useFetch("/api/cart", {
					method: "GET",
					params: { userId: currentUser.value.uid },
				});
				return data.value;
			} catch (error: any) {
				console.log("error in getCart", error);
				toast.error("Failed to fetch cart");
				return [];
			}
		}
	};

	const clearCart = async () => {
		if (!currentUser.value) {
			localStorage.removeItem("cart");
			toast.success("Cart cleared locally");
		} else {
			try {
				await $fetch("/api/cart", {
					method: "DELETE",
					body: { userId: currentUser.value.uid },
				});
				toast.success("Cart cleared");
			} catch (error: any) {
				toast.error(error.message || "Failed to clear cart");
			}
		}
	};

	return { addToCart, updateCartItem, getCart, clearCart, getUser };
};
