import axios from "axios";
import { ActorListInfo, BaseType, CommentData, PageType } from "@/axios/types";

export async function getSubjectDetail(props: {
  id: number;
  pageNo?: number;
  pageSize?: number;
}) {
  const res = await axios.get("work/comment", {
    params: {
      workId: props.id,
      pageNo: props.pageNo,
      pageSize: props.pageSize,
    },
  });
  const data: PageType<CommentData> = res.data;
  return data;
}

export async function postComment(props: {
  workId: number;
  content: string;
  score: number;
}) {
  const res = await axios.post(
    "comment/add",
    {},
    {
      params: {
        workId: props.workId,
        content: props.content,
        score: props.score * 2,
      },
    }
  );
  const data: BaseType<CommentData> = res.data;
  return data;
}

export async function getActors(props: { id: number; role: string }) {
  const res = await axios.get("work/actor", {
    params: {
      workId: props.id,
      role: props.role.toUpperCase(),
    },
  });
  const data: BaseType<ActorListInfo> = res.data;
  return data;
}
