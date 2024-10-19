import {TruthTeller} from './truth-teller.model';

export class Truth {
  id: number;
  content: string;
  createdAt: Date;
  teller: TruthTeller;
}
