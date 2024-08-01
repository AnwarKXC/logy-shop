// // store/useCartStore.ts
// import { getAuth } from "firebase/auth";
// export const useCartStore = defineStore("cart", {
// 	state: () => ({
// 		items: [],
// 		isLoading: false,
// 		error: null,
// 	}),

// 	actions: {
// 		async fetchCart() {
// 			this.isLoading = true;
// 			const auth = getAuth();
// 			const userId = auth.currentUser?.uid;

// 			if (userId) {
// 				// User is logged in, fetch from database
// 				try {
// 					const { data } = await useFetch("/api/cart", {
// 						params: { userId },
// 					});
// 					this.items = data.value.items;
// 					// Sync with localStorage
// 					localStorage.setItem("cart", JSON.stringify(this.items));
// 				} catch (error) {
// 					this.error = error;
// 				}
// 			} else {
// 				// User is not logged in, fetch from localStorage
// 				const localCart = localStorage.getItem("cart");
// 				this.items = localCart ? JSON.parse(localCart) : [];
// 			}

// 			this.isLoading = false;
// 		},

// 		async addToCart(product) {
// 			this.items.push(product);
// 			await this.syncCart();
// 		},

// 		async removeFromCart(productId) {
// 			this.items = this.items.filter((item) => item.id !== productId);
// 			await this.syncCart();
// 		},

// 		async syncCart() {
// 			const auth = useFirebaseAuth();
// 			const userId = auth.currentUser?.uid;

// 			// Always update localStorage
// 			localStorage.setItem("cart", JSON.stringify(this.items));

// 			if (userId) {
// 				// If user is logged in, also sync with database
// 				try {
// 					await $fetch("/api/cart", {
// 						method: "POST",
// 						body: { userId, items: this.items },
// 					});
// 				} catch (error) {
// 					this.error = error;
// 				}
// 			}
// 		},
// 	},
// });
