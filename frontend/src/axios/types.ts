export type BaseType<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type PageType<T> = {
  success: boolean;
  message: string;

  pageSize: number;
  pageNo: number;
  totalCount: number;
  totalPage: number;
  hasPre: boolean;
  hasNext: boolean;

  data: T[];
};

export type UserInfo = {
  id: number;
  username: string;
  avatar: string;
  hasLogin: boolean;
};

export type TagData = {
  id: number;
  name: string;
  relatedWork: number;
};

export type SubjectData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  score: number;
  ratePerson: number;
};

export type IndexData = {
  anime: IndexBlockData[];
  novel: IndexBlockData[];
  game: IndexBlockData[];
  music: IndexBlockData[];
};

export type IndexBlockData = {
  id: number;
  title: string;
  picture: string;
  favoritePerson: number;
  category: string;
};
