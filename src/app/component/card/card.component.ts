import {Component, Input} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {Router, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ProductService} from '../../services/product.service';
import {MatCard, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() productInCard: ProductModel | undefined;
  constructor(
    private router: Router,
    private productService: ProductService,
  ) {
  }
  navigateToDetails(id: string) {
    this.router.navigate(['detail',id]).then();
  }

  addToCart(id: string) {
    this.productService.addProductToCart(id)
  }
}
