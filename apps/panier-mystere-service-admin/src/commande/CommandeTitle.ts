import { Commande as TCommande } from "../api/commande/Commande";

export const COMMANDE_TITLE_FIELD = "id";

export const CommandeTitle = (record: TCommande): string => {
  return record.id?.toString() || String(record.id);
};
