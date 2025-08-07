export interface ProductModel {
  id: string;
  name: string;
  price: string;
  originalPrice?: number;
  discount?: number;
  imageUrl: string;
  quantity: number;
  // Thêm các thuộc tính cho trang chi tiết
  images: string[];
  variants: {
    name: string;
    options: {
      label: string;
      priceModifier: number;
      isDefault?: boolean;
    }[];
  }[];
  specs: {
    group: string;
    items: {
      name: string;
      value: string;
    }[];
  }[];
}
