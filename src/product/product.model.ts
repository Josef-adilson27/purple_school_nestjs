export class ProductModel {
  id: string;
  image: string;
  title: string;
  price: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  catergory: string;
  tags: string;
  characteristics: {
    [key: string]: string;
  };
}
