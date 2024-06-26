export interface IProduct {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  category: string;
  ingredients: {
    name: string;
    icon: string;
  }[];
}
