import { ModelsOEM } from './models-oem';

export interface OemElement {
  oem: string;
  name: string;
  models: ModelsOEM[];
}
