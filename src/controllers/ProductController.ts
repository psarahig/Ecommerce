import Product from "../models/Product";
import { Request, Response } from 'express';
import ProductInterface from '../interfaces/product.interface';

class ProductController {

    // List all products
    static async getAll( req: Request, res: Response ) {
        try {
            const products : ProductInterface[] = await Product.findAll();

            return res.status(200).json({
                success: true,
                data: products
            });
        }
        catch(error){
            return res.status(500).json({
                success: false,
                message: 'Error when retrieving all products', 
                error: (error as Error).message
            });
        }
    }

    // Get one product by id
    static async getById( req: Request, res: Response ) {
        try {
            const { id } = req.params;
            const product: ProductInterface = await Product.findByPk(id);

            return res.status(200).json({
                success: true,
                data: product
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error when retrieving the product', 
                error: (error as Error).message
            })
        }
    }

    // Add a new product
    static async create( req: Request, res: Response ) {
        
        try {
            const productData: Partial<ProductInterface> = req.body;
            const { name, description='', image, price, active, stock } = productData;
            const product: ProductInterface = await Product.create({
                name, description, image, price, active, stock
            })

            return res.status(201).json({
                success: true,
                message: "Product created successfully",
                data: product
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error when adding a new product', 
                error: (error as Error).message
            });
        }
        
    }

    // Update existing product
    static async update( req: Request, res: Response ) {
        try {
            const productData: Partial<ProductInterface> = req.body;
            const { id } = req.params;
            const { name, description='', image, price, active, stock } = productData;

            // Modify given a product id
            const product = await Product.findByPk(id);
            
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: 'Product not found'
                });
            }
            
            // Modify all posible attributes
            if(name !== undefined) product.name = name;
            if(description !== undefined) product.description = description;
            if(image !== undefined) product.image = image;
            if(price !== undefined) product.price = price;
            if(active !== undefined) product.active = active;
            if(stock !== undefined) product.stock = stock;

            await product.save();
            
            return res.status(200).json({
                success: true,
                message: "Product updated successfully",
                data: product
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error when updating the product', 
                error: (error as Error).message
            });
        }
    }

    // Delete a product by id
    static async delete(req: Request, res: Response) {
        try {
            const id = req.params.id
            const product = await Product.findByPk(id);
            product.destroy();
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error when deleting the product', 
                error: (error as Error).message
            });
        }
    }

}

export default ProductController;