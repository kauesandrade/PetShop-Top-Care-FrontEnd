import { PaymentMethod } from './payment-method';

export interface Pix extends PaymentMethod {
  copyPasteCode: string;
  qrCode: string;
  expirationInterval: number;
}
