import { User } from "./user";

export interface ReviewProduct {
    // user: User;
    user: string;
    icon: string;
    review: string;
    rating: number;
    datePost: string;
}
