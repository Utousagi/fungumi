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

export type CommentData = {
  id: number;
  userId: number;
  username: string;
  avatar: string;
  score: number;
  workId: number;
  workName: string;
  content: string;
  time: string;
  hasLike: boolean;
  likes: number;
};

export type actorInfo = {
  id: number;
  name: string;
  avatar: string;
  occupation: string;
};

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
  commentBeanPage: { element: number; comments: CommentData[] };
  avgScore: number;
  scoreMap: { score: number; number: number }[];
};

export const loadingWorkInfo: workInfo = {
  workId: 0,
  category: "",
  workTitle: "",
  workImage: "",
  workParams: {},
  favoriteStatus: 0,
  workProfile: "",
  tagResults: [],
  actor: [],
  commentBeanPage: {
    element: 0,
    comments: [],
  },
  avgScore: 0,
  scoreMap: [],
};

export type ActorListInfo = {
  id: number;
  name: string;
  chineseName: string;
  description: string;
  avatar: string;
};

export type ActorWorkInfo = {
  id: number;
  picture: string;
  title: string;
  profile: string;
};

export type ActorInfo = {
  id: number;
  name: string;
  avatar: string;
  chineseName: string;
  description: string;
  works: ActorWorkInfo[];
  params: Object;
};

export const loadingActorInfo: ActorInfo = {
  id: 0,
  name: "",
  avatar: "",
  chineseName: "",
  description: "",
  works: [],
  params: {},
};

export const categoryList = new Map([
  ["anime", "动画"],
  ["novel", "小说"],
  ["game", "游戏"],
  ["music", "音乐"],
]);
