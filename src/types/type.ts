export interface Health {
  birth_date: string;
  data: Datum[];
  height: string;
  sex: string;
}

interface Datum {
  date: string;
  keydata: string;
  model: string;
  tag: string;
}

export type TableOfContent = {
  text: string;
  id: string;
  tag: string;
};

export type Weight = { date: string; weight: string };
export type Bodyfat = { date: string; bodyfat: string };
