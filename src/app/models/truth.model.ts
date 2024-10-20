import {TruthTeller} from './truth-teller.model';

export class Truth {
  id: number;
  statement: string;
  createdAt: Date;
  teller: TruthTeller;
}
