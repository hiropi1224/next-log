export type BlogsResult = {
  contents: Blog[];
};

export interface Blog {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: Eyecatch;
  category: Category;
}

interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

interface Eyecatch {
  url: string;
  height: number;
  width: number;
}

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
