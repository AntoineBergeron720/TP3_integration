export interface Category{
    _id: string;
    name: string;
}

export interface Product{
    _id: string;
    userId: string;
    isSold: boolean;
    price: number;
    title: string;
    description: string;
    categoryId: string;
}