interface ProductInterface {
    id:  number;
    name: string;
    description?: string;
    price: number;
    active: boolean;
    stock: number;
    createdAt?: Date;
}

export default ProductInterface