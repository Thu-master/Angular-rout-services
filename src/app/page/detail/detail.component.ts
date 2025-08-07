import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {ProductModel} from '../../models/product.model';
import { CommonModule } from '@angular/common';
import {MatCard, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  productDetail!: ProductModel
  /*
  * Tuc la ban dau ben app.routes.ts chon duong da path
  *  1 trang index dung chung cho cac componnet cho nen ben file app.routes.ts la de tao path tro toi component
  *  ben nay khai bai contructor de detail lay id san pham tu home(lay tren url) */
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,) {
    let{id} = this.activatedRoute.snapshot.params;
    console.log(id)
    this.productDetail = this.productService.getDetailProduct(id)
    console.log(this.productDetail)
  }
}
