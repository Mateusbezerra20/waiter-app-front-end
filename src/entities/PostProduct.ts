export interface IPostProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: {
    name: string;
    icon: string;
  }[];
  image: File;
}
