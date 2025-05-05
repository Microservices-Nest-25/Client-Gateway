import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  getProducts() {
    return 'List of products';
  }

  @Post()
  createProduct() {
    return 'Product created successfully!';
  }

  @Get(':id')
  getProductById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return 'Product details by ID';
  }

  @Patch(':id')
  updateProductById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return 'Product updated successfully!';
  }
  
  @Delete(':id')
  deleteProductById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return 'Product deleted successfully!';
  }
}
