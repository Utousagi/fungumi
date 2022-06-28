import axios from "axios";

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

export async function getSubjectListByRank(pageSize: number, pageNum: number) {
	try {
		const res = await axios({
			method: "get",
			url: "/page/tag",
			data: {
				pageSize: pageSize,
				pageNum: pageNum
			}
		})
		console.log(res);
		const data = res.data.data;
		return data.content;
	} catch (error) {
		console.log(error);
	}

}