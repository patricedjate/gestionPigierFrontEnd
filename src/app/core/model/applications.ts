import {Etudiants} from "./etudiants";
import {Stages} from "./stages";

export interface Applications{
      id?: number;
      date_application?: string;
      Statut?: string;
      etudiant?: Etudiants[];
      stage?: Stages[];
}
