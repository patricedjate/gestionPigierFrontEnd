import { Stages } from "./stages";


export interface Etudiants{
  id?: number;
  nom? : string;
  prenom?: string;
  email? : string;
  telephone? : string;
  universite?: string;
  niveau_etude?: string;
  date_naissance?: string
  stage? : Stages[];

}
