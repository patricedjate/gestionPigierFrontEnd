import {Stages} from "./stages";

export interface Entreprises{
  id?:number;
  nom?: string;
  adresse?: string;
  email?: string;
  telephone?: string;
  secteur_activite?: string;
  stage?: Stages[];

}
