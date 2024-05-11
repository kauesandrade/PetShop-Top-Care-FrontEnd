import { ProductVariant } from "./product-variant";

export interface Item {
    product: ProductVariant;
    amount: number;
    subcription?: boolean;
    // mudar subscription depois para a interface
}
