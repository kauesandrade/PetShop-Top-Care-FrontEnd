import { staticImage } from './image';
import { staticSchedule } from './schedule';

export const staticPet = {
  id: 1,
  idColor: 'pet-red',
  image: staticImage,
  name: 'Topolino',
  type: 'Cachorro',
  race: 'Shihtzu',
  size: 'Médio',
  gender: 'Macho',
  color: 'Branco',
  birth: '01/01/2020',
  weight: 15.5,
  schedules: [staticSchedule],
};
