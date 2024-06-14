export interface IProduct {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: 20;
  ingredients: {
    name: string;
    icon: string;
  }[];
}
