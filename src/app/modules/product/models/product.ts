export interface Product {
  id?: number;
  title: string;
  price: number;
  description?: string;
}

export type Products = Product[];
