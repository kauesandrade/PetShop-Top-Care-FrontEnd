import { Schedule } from '../schedule/schedule';

export interface Pet {
  id: number;
  idColor: string;
  image: string;
  name: string;
  size: string;
  type: string;
  microchip?: number;
  race: string;
  gender: string;
  color: string;
  birth: string;
  rga?: number;
  weight: number;
  schedules: Schedule[];
}
