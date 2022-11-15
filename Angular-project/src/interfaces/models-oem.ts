import { Prising } from './prising';
import { Types } from './types';

export interface ModelsOEM {
  model: string;
  pricing: Prising;
  types: Types[];
}
