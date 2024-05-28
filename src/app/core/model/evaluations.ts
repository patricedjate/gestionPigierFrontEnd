import {Applications} from "./applications";

export interface Evaluations {
  id?: number;
  date_evaluation?: string;
  commentaire?: string;
  note? : number;
  application?: Applications[];
}
