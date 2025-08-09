export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string, //This works better as en enum, however it's not possible with the API return values without very weird workarounds
    image: string,
}