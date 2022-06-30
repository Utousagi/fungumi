import {
  Button,
  Divider,
  Input,
  Layout,
  Message,
  Pagination,
  Rate,
  Space,
} from "@arco-design/web-react";
import { useEffect, useState } from "react";
import { CommentShow } from "@/components/CommentShow";
import { CommentData } from "@/axios/types";
import { IconStarFill } from "@arco-design/web-react/icon";
import { getSubjectDetail, postComment } from "@/axios/Subject";
import { useParams } from "react-router-dom";
import reduxStore from "@/redux/reduxStore";

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
  const [reviewList, setReviewList] = useState<CommentData[]>([]);
  const [total, setTotal] = useState(0);
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(-1);
  const id = useParams<"id">().id;
  useEffect(() => {
    getSubjectDetail({ id: Number(id), pageSize: 5 }).then((res) => {
      setReviewList(res.data);
      setTotal(res.totalCount);
    });
  }, []);

  return (
    <Layout.Content style={{ overflow: "hidden", padding: 0 }}>
      <Space>
        <Input.TextArea
          placeholder="在这写下你的感想@w@"
          style={{
            backgroundColor: "white",
            border: "2px solid pink",
            borderRadius: 5,
            width: 596,
          }}
          autoSize={{ minRows: 3, maxRows: 3 }}
          value={comment}
          onChange={(value) => {
            setComment(value);
          }}
        />
        <Button
          style={{ width: 78, height: 78 }}
          onClick={() => {
            if (reduxStore.getState().user.isLogin) {
              postComment({
                workId: Number(id),
                content: comment,
                score: score,
              }).then((res) => {
                if (res.success) {
                  setComment("");
                  setScore(-1);
                  setReviewList([res.data, ...reviewList]);
                }
              });
            } else {
              Message.warning("请先登录");
            }
          }}
        >
          发表
        </Button>
      </Space>
      <div style={{ width: 630, textAlign: "start" }}>
        <Rate
          allowHalf
          character={<IconStarFill fontSize={20} />}
          value={score}
          onChange={(value) => {
            setScore(value);
          }}
        />
      </div>
      <Divider />
      {reviewList.map((comment: CommentData) => {
        return <CommentShow data={comment} />;
      })}
      <Pagination
        total={total}
        defaultPageSize={5}
        defaultCurrent={props.page}
        onChange={(pageNo: number) => {
          getSubjectDetail({
            id: Number(id),
            pageNo: pageNo,
            pageSize: 5,
          }).then((res) => {
            setReviewList(res.data);
          });
        }}
        style={{ marginTop: "10px" }}
      />
    </Layout.Content>
  );
}

export default SubjectReview;
