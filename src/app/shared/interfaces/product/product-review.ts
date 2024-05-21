import { User } from '../user/user';

export interface ProductReview {
  user: string;
  icon: string;
  title: string;
  review: string;
  rating: number;
  image: string;
  datePost: string;
}
