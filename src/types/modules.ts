export interface Categories{
    category: any;
    _id: string;
    name: string;
}

export interface Products{
    _id: string;
    userId: string;
    isSold: boolean;
    price: number;
    title: string;
    description: string;
    categoryId: string;
}