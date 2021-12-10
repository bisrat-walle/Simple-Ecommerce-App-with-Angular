export interface Product{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}

export const PRODUCTS: Product[ ] = [
    { id: 1, name: 'Nike', price: 8, imageUrl: 'assets/pro_img.jfif', description:"Color: red and Size: 40"},
    { id: 2, name: 'PUMA', price: 80, imageUrl: 'assets/pro_img.jfif', description:"Color: red and Size: 40"},
    { id: 3, name: 'Addidas', price: 70, imageUrl: 'assets/pro_img.jfif', description:"Color: red and Size: 40"}
]

