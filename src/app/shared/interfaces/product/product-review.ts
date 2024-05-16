import { User } from '../user/user';

export interface ProductReview {
  user: User;
  icon: string;
  review: string;
  rating: number;
  datePost: string;
}
