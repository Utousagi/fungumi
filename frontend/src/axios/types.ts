import { CommentData } from "./User";

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

export type actorInfo = {
  id: number;
  name: string;
  avatar: string;
  occupation: string;
}

export type workInfo = {
	workId: number;
	category: string;
	workTitle: string;
	workImage: string;
	workParams: Object;
	favoriteStatus: number;
	workProfile: string;
	tagResults: TagData[];
  actor: actorInfo[];
  commentBeanPage: {element: number, commentBeanList: CommentData[]};
  avgScore: number;
  scoreMap: {score: number, number: number}[];
}
  
export const loadingWorkInfo: workInfo = {
  workId: 0,
  category: "",
  workTitle: "",
  workImage: "",
  workParams: new Object(),
  favoriteStatus: 0,
  workProfile: "",
  tagResults: [],
  actor: [],
  commentBeanPage: {
    element: 0,
    commentBeanList: []
  },
  avgScore: 0,
  scoreMap: []
}

export const categoryList = new Map([
  ["anime", "动画"],
  ["novel", "小说"],
  ["game", "游戏"],
  ["music", "音乐"]
]);