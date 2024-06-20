import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Service {
  code: number;
  image: string;
  title: string;
  description: string;
  category: string;
  servedPets: Array<string>;
}
