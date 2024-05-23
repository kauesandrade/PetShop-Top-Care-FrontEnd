import { PaymentMethod } from './payment-method';

export interface Pix {
  copyPasteCode: string;
  qrCode: string;
  expirationInterval: number;
}
