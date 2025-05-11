import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {IProduct, ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  /*imports: [
    NgForOf , NgIf
  ],*/
  imports:[],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true,
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe(products => this.products = products);

  }

  handleDelete(product: IProduct) {
    const confirmed = confirm('Êtes-vous sûr de vouloir supprimer ce produit ?');

    if (confirmed) {
      this.productService.deleteProduct(product.id).subscribe({
        next: () => {
          this.getAllProducts();
          alert('Produit supprimé avec succès');
        },
        error: (err) => {
          console.error(err);
          alert('Erreur lors de la suppression');
        }
      });
    }
  }

}
