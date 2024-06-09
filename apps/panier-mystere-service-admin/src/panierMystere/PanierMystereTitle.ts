import { PanierMystere as TPanierMystere } from "../api/panierMystere/PanierMystere";

export const PANIERMYSTERE_TITLE_FIELD = "id";

export const PanierMystereTitle = (record: TPanierMystere): string => {
  return record.id?.toString() || String(record.id);
};
