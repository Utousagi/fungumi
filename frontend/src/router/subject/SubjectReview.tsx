import { Layout, Pagination } from "@arco-design/web-react";
import { useState } from "react";
import { CommentShow } from "@/components/CommentShow";
import { CommentData } from "@/axios/User";

type CommentPageData = {
  id: number;
  title: string;
  img: string;
  total: number;
  comments: CommentData[];
  details: Map<string, string>;
};

let data: CommentPageData = {
  id: 1,
  title: "测试标题",
  img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
  total: 5,
  comments: [
    {
      id: 1,
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
    {
      id: 1,
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
    {
      id: 1,
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
    {
      id: 1,
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
    {
      id: 1,
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
  ],
  details: new Map([
    ["语言", "C#,C++,Java,Python,Pascal,C,Go"],
    ["类型", "游戏"],
    ["状态", "进行中"],
  ]),
};

function SubjectReview(props: { page?: number } = { page: 1 }) {
  const [reviewList, setReviewList] = useState(data.comments);

  return (
    <Layout.Content style={{ overflow: "hidden", padding: 0 }}>
      {reviewList.map((comment: CommentData) => {
        return <CommentShow data={comment} />;
      })}
      <Pagination
        total={data.total}
        defaultPageSize={5}
        defaultCurrent={props.page}
        onChange={(pageNumber: number) => {
          setReviewList(
            data.comments.slice((pageNumber - 1) * 10, pageNumber * 10)
          );
        }}
        style={{ marginTop: "10px" }}
      />
    </Layout.Content>
  );
}

export default SubjectReview;
