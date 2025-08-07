import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  constructor() {}
    productList: ProductModel [] = [
    {
      id: 'macbook-air-m1',
      name: 'MacBook Air 13 inch M1 8GB/256GB',
      price: "16.990.000đ",
      originalPrice: 19590000,
      discount: 13,
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-m1-13-xam-new-650x650.png',
      images: [
        'https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-m1-13-xam-new-650x650.png',
        'https://cdn.tgdd.vn/Products/Images/44/231244/s16/macbook-air-m1-2020-gray-650x650.png',
        'https://cdn.tgdd.vn/Products/Images/44/231244/s16/macbook-air-m1-2020-gray-2-650x650.png'
      ],
      quantity: 0,
      variants: [
        {
          name: 'Màu sắc',
          options: [
            { label: 'Xám', priceModifier: 0, isDefault: true },
            { label: 'Bạc', priceModifier: 0 },
            { label: 'Vàng', priceModifier: 0 },
          ]
        }
      ],
      specs: [
        {
          group: 'CPU',
          items: [
            { name: 'Công nghệ CPU', value: 'Apple M1' },
            { name: 'Số nhân', value: '8' }
          ]
        },
        {
          group: 'RAM, Ổ cứng',
          items: [
            { name: 'RAM', value: '8 GB' },
            { name: 'Ổ cứng', value: '256 GB SSD' }
          ]
        },
        {
          group: 'Màn hình',
          items: [
            { name: 'Kích thước màn hình', value: '13.3 inch' },
            { name: 'Độ phân giải', value: 'Retina (2560 x 1600)' }
          ]
        }
      ]
    },
    {
      id: 'macbook-air-m2',
      name: 'MacBook Air 13 inch M2 16GB/256GB/8GPU',
      price: "19.890.000đ",
      originalPrice: 24490000,
      discount: 18,
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/44/289472/s16/mac-air-m2-13-xanh-new-1-650x650.png',
      images: [
        'https://cdn.tgdd.vn/Products/Images/44/289472/s16/mac-air-m2-13-xanh-new-1-650x650.png'
      ],
      quantity: 0,
      variants: [],
      specs: []
    },
    {
      id: 'macbook-air-m4',
      name: 'MacBook Air 13 inch M4 16GB/256GB',
      price: "25.490.000đ",
      originalPrice: 26490000,
      discount: 3,
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/44/335362/s16/macbook-air-13-inch-m4-thumb-xanh-da-troi-650x650.png',
      images: [
        'https://cdn.tgdd.vn/Products/Images/44/335362/s16/macbook-air-13-inch-m4-thumb-xanh-da-troi-650x650.png'
      ],
      quantity: 0,
      variants: [],
      specs: []
    },
  ]
  getDetailProduct(id: string) :ProductModel {
    let product = this.productList.find(item => item.id === id);
    if (product) {
      return product;
    }    else {
      return {} as ProductModel;
    }
  }
  cartList: ProductModel[] = [];
  addProductToCart( id: string){
    let product = this.productList.find(item => item.id === id);
    if (product) {
      let productInCart =this.cartList.find(itemCart => product.id === itemCart.id);
      if(productInCart){
        product.quantity += 1;
      }else{
        product.quantity += 1;
        this.cartList.push(product);
      }
    }
    console.log(this.cartList);
  }
}
