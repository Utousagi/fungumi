import axios from "axios";
import {
  BaseType,
  IndexData,
  PageType,
  SubjectData,
  TagData,
} from "@/axios/types";

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
};

export async function getSubjectListByRank(pageSize: number, pageNum: number) {
  try {
    const res = await axios({
      method: "get",
      url: "/page/tag",
      data: {
        pageSize: pageSize,
        pageNum: pageNum,
      },
    });
    console.log(res);
    const data = res.data.data;
    return data.content;
  } catch (error) {
    console.log(error);
  }
}

export async function getIndexDisplay() {
  const res = await axios.get("work/display");
  const data: BaseType<IndexData> = res.data;
  return data;
}

export async function getTags(props: {
  category: string;
  pageNo?: number;
  pageSize?: number;
}) {
  const res = await axios.get("tag/page", {
    params: {
      category: props.category,
      pageNo: props.pageNo,
      pageSize: props.pageSize,
    },
  });
  const data: PageType<TagData> = res.data;
  return data;
}

export async function getSubjects(props: {
  category: string;
  pageNo?: number;
  pageSize?: number;
  tag?: string;
  orderBy?: string;
  keyword?: string;
}) {
  const res = await axios.get("work/page", {
    params: {
      category: props.category,
      tag: props.tag,
      keyword: props.keyword,
      pageNo: props.pageNo,
      pageSize: props.pageSize,
      orderBy: props.orderBy,
    },
  });
  const data: PageType<SubjectData> = res.data;
  return data;
}
