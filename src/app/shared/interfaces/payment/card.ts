export interface Card {
  id: number | null;
  name: string;
  lastDigits: string;
  expirationDate: string;
  mainCard: boolean;
}

export interface CardRequestDTO {
  name: string;
  lastDigits: string;
  expirationDate: string;
  mainCard: boolean;
  userId: number;
}
