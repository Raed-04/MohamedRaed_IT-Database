import { api } from "./api";

//Fetches the products from the fake API (the only service we have, but still better documented)
export async function getProducts() {
    try {
        const response = await api.get("products");
        console.log("Products:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}