export interface IPostProduct {
  name: string;
  description: string;
  price: string;
  category: string;
  ingredients: {
    name: string;
    icon: string;
  }[];
  image: File;
}
