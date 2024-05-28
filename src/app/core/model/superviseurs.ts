import {Entreprises} from "./entreprises";

export interface Superviseurs{
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  entreprise?: Entreprises[];
}
