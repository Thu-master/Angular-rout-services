import { Component } from '@angular/core';
import {MainComponent} from '../../component/main/main.component';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {ProductModel} from '../../models/product.model';
import {CardComponent} from '../../component/card/card.component';


@Component({
  selector: 'app-home',
  imports: [
    MainComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productHome: ProductModel[] = []
  constructor(
    private router: Router,
    //tim vao
    private productService: ProductService,
  ) {
    //console.log(this.productService.productList);
    this.productHome = this.productService.productList;
    console.log(this.productHome)
  }
}
