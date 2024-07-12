import { Schedule } from '../schedule/schedule';

export interface Pet {
  id: number;
  idColor: string;
  image: string;
  name: string;
  type: string;
  race: string;
  size?: string;
  microchip?: number;
  gender: string;
  color: string;
  birth: string;
  rga?: number;
  weight: number;
  schedules: Schedule[];
}
