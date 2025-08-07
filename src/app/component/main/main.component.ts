import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent{

}
