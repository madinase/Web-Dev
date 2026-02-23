import { Component } from '@angular/core';
import { products, categories } from './data/products';
import { ProductListComponent } from './components/product-list/product-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  categories = categories;
  allProducts = products;
  selectedCategoryId: number | null = null;

  get filteredProducts() {
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  handleRemove(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }
}