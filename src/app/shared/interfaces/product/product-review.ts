import { User } from '../user/user';

export interface ProductReview {
  user: string;
  icon: string;
  review: string;
  rating: number;
  datePost: string;
}
