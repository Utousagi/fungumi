import { FavouriteData } from "@/router/User/UserFavourite";
import axios, { Axios, AxiosResponse } from "axios";
import { type } from "os";

export type UserData = {
	userId: number;
	username: string;
	avatar: string;
	description: string;
};

export type PageResult<T> = {
	content: T[];
	totalElements: number;
}

export type InfoPageData = {
	id: number;
	description: string;
	likes: CommentData[];
	reviews: CommentData[];
	favourites: FavouriteData[];
}

export type CommentData = {
  userId: number;
  username: string;
  avatar: string;
  score: number;
  time: string;
  content: string;
  islike: boolean;
  likes: number;
};

export type FavouritePageData = {
  favourites: FavouriteData[];
  total: number;
};

export function getUserDataById(userId: number): UserData {
	axios.get("/api/getUserDataById?userId=" + userId)
		.then((response: AxiosResponse) => { return response.data})
		.catch((error) => { console.log(error) });
	return {} as UserData;
}

function getUserLikeListByPage(userId: number, pageSize:number, pageNum:number) : PageResult<CommentData> {
	axios({
		method: "get",
		url: "/api/getUserLikeListByPage",
		data:{
			userId: userId,
			pageSize: pageSize,
			pageNum: pageNum
		}
	})
		.then((response: AxiosResponse) => { return response.data})
		.catch((error) => { console.log(error) })
	return null as unknown as PageResult<CommentData>;
}

function getUserCommentListByPage(userId: number, pageSize:number, pageNum:number) : PageResult<CommentData> {
	axios({
		method: "get",
		url: "/api/getUserCommentListByPage",
		data:{
			userId: userId,
			pageSize: pageSize,
			pageNum: pageNum
		}
	})
		.then((response: AxiosResponse) => { return response.data})
		.catch((error) => { console.log(error) })
	return null as unknown as PageResult<CommentData>;
}

function getUserFavouriteListByPage(userId: number, pageSize:number, pageNum:number) : PageResult<FavouriteData> {
	axios({
		method: "get",
		url: "/api/getUserFavouriteListByPage",
		data:{
			userId: userId,
			pageSize: pageSize,
			pageNum: pageNum
		}
	})
		.then((response: AxiosResponse) => { return response.data})
		.catch((error) => { console.log(error) })
	return null as unknown as PageResult<FavouriteData>;
}

export function getUserInfoPage(userId: number) {
	const result:InfoPageData = {
		id: userId,
		description: getUserDataById(userId).description,
		likes: getUserLikeListByPage(userId,1,5).content,
		reviews: getUserCommentListByPage(userId,1,5).content,
		favourites: getUserFavouriteListByPage(userId,1,5).content
	}
	return result;
}

export function getFavouritePageInfo(userId: number, pageNumber:number) {
	const page = getUserFavouriteListByPage(userId,10,pageNumber);
	const result:FavouritePageData = {
		favourites: page.content,
		total: page.totalElements
	}
	return result;
}