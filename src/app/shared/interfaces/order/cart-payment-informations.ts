import { Address } from "../user/address";

export interface CartPaymentInformations {
    partialPrice?: number,
    amountItens?: number,
    discountPrice?: number,
    parcelsPrice?: number,
    parcelsNumber?: number,
    totalPrice?: number,
    shippingPrice?: number,
    typeShipping?: string,
    address?: Address,
}
