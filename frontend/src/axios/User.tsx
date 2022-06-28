import axios from "axios";

export type ReviewPageData = {
	total: number;
	reviews: CommentData[];
};

export const loadingReviewPage: ReviewPageData = {
	total: 0,
	reviews: []
}

export type UserData = {
  userId: number;
  username: string;
  avatar: string;
  description: string;
};

export const loadingUser: UserData = {
	userId: 1,
	username: "Loading",
	avatar: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp",
	description: "Loading",
}

export type PageResult<T> = {
  content: Array<T>;
  totalElements: number;
};

export type InfoPageData = {
  id: number;
  description: string;
  likes: CommentData[];
  reviews: CommentData[];
  favourites: FavouriteData[];
};

export type CommentData = {
	userId: number;
	username: string;
	avatar: string;
	score: number;
	workId: number;
	workName: string;
	content: string;
	time: string;
	islike: boolean;
	likes: number;
};

export type FavouritePageData = {
  favourites: FavouriteData[];
  total: number;
};

export const loadingFavouritePage: FavouritePageData = {
	favourites: [],
	total: 0
}

export type FavouriteData = {
	id: number;
	title: string;
	profile: string;
	picture: string;
	category: string;
	score: number;
	votes: number;
	type: string;
};

export async function getUserDataById(userId: number) {
	let data;
	await axios({
		method: "get",
		url: "/userInfo/info?id=" + userId,
	}).then(res => {
		data = res.data.data;
	})
	return data;
}

export async function getUserLikeListByPage(userId: number, page: number) {
	const res = await axios({
		method: "get",
		url: "/userInfo/likes?id=" + userId + "&page=" + (page-1),
	})
	console.log(res);
	return res.data.data;
}

export async function getUserCommentListByPage(userId: number, page: number) {
	const res = await axios({
		method: "get",
		url: "/userInfo/comments?id=" + userId + "&page=" + (page-1),
	})
	return res.data.data;
}

export async function getUserFavouriteListByPage(userId: number, page:number) {
	const res = await axios({
		method: "get",
		url: "/userInfo/favorites?id=" + userId + "&page=" + (page-1),
	})
	return res.data.data;
}

export async function getUserInfoPage(userId: number) {
	const res = await axios({
		method: "get",
		url: "/userInfo/mainPage?id=" + userId,
	})
	return res.data.data;
}
