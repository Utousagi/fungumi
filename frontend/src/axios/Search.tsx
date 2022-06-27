import { FavouriteData } from "@/router/User/UserFavourite";
import { Result } from "@arco-design/web-react";
import axios, { AxiosResponse } from "axios";
import BaseUrl from "./Const";
import { PageResult } from "./User";

export type SearchPageData = {
    id: number;
    title: string;
    profile: string;
    score: number;
    category: string;
    likes: number;
    picture: string;
    rateP: number;
    rank: number;
}

export function getSubjectListByRank(pageSize: number, pageNum: number) {    
    try {
        axios({
            method: "get",
            url: "page/id",
            data: {
                pageSize: pageSize,
                pageNum: pageNum
            }
        })
            .then((response: AxiosResponse<PageResult<SearchPageData>>) => {
                result = response;
                // Object.assign(result, response);
            })
            .catch((error) => {
                console.log(error);
                throw error;
            })
    } catch (error) {
        return {
            content: [],
            totalElements: 0
        };
    }
    console.log(result);
    console.log(result.data);
    return {
        content: result.data.content,
        totalElements: result.data.totalElements
    };
}