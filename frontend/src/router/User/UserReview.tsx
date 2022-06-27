import {
  Divider,
  Grid,
  Image,
  Layout,
  Link,
  Pagination,
} from "@arco-design/web-react";
import Content from "@arco-design/web-react/es/Layout/content";
import Header from "@arco-design/web-react/es/Layout/header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { UserData, CommentData } from "@/axios/User";
import { CommentShow } from "../../components/CommentShow";

type ReviewPageData = {
  user: UserData;
  total: number;
  reviews: CommentData[];
};

const data2: CommentData[] = [
  {
    userId: 1,
    username: "Abigail",
    avatar:
      "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
    score: 7,
    time: "Now",
    content:
      "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
    islike: false,
    likes: 233,
  },
  {
    userId: 1,
    username: "Abigail",
    avatar:
      "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
    score: 7,
    time: "Now",
    content:
      "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
    islike: false,
    likes: 233,
  },
];

const data: UserData = {
  userId: 1,
  username: "ZeesangPie",
  avatar: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
  description: ""
};

const data3: ReviewPageData = {
  user: data,
  total: 22,
  reviews: data2,
};

export default function Review(props: { page?: number } = { page: 1 }) {
  const id = useParams().id;
  var [reviewList, setReviewList] = useState(data3.reviews);

  return (
    <Content style={{}}>
      <Grid.Row style={{ width: "100%" }}>
        <Grid.Col
          offset={3}
          span={18}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {reviewList.map((review: CommentData) => {
            return <CommentShow data={review} />;
          })}
        </Grid.Col>
      </Grid.Row>
      <Pagination
        total={data3.total}
        defaultPageSize={10}
        defaultCurrent={props.page}
        onChange={(pageNumber: number) => {
          setReviewList(
            data3.reviews.slice((pageNumber - 1) * 10, pageNumber * 10)
          );
        }}
        style={{ marginTop: "10px" }}
      />
    </Content>
  );
}
