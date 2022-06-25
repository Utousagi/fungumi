import {
  Layout,
  Link,
  Image,
  Slider,
  Pagination,
} from "@arco-design/web-react";
import Content from "@arco-design/web-react/es/Layout/content";
import Footer from "@arco-design/web-react/es/Layout/footer";
import Header from "@arco-design/web-react/es/Layout/header";
import Sider from "@arco-design/web-react/es/Layout/sider";
import { useState } from "react";
import { Details, SubjectMenu } from "./Abstract";
import { CommentData, CommentShow } from "./CommentShow";

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
      userId: "Abigail",
      avator:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
      likes: 233,
    },
    {
      userId: "Abigail",
      avator:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content:
        "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
      likes: 233,
    },
    {
      userId: "Abigail",
      avator:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content:
        "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
      likes: 233,
    },
    {
      userId: "Abigail",
      avator:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content:
        "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
      likes: 233,
    },
    {
      userId: "Abigail",
      avator:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content:
        "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏，可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏，可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
      likes: 233,
    },
  ],
  details: new Map([
    ["语言", "C#,C++,Java,Python,Pascal,C,Go"],
    ["类型", "游戏"],
    ["状态", "进行中"],
  ]),
};

export default function Reviews(props: { page: number } = { page: 1 }) {
  const subjectUrl = "/subject/" + data.id;
  const select = "reviews";

  var [reviewList, setReviewList] = useState(data.comments);
  console.log(reviewList);


  return (
    <Layout style={{ width: "95%", height: "400px" }}>
      <Header
        style={{
          width: "105%",
          alignSelf: "center",
          flexDirection: "column",
          alignItems: "start",
          height: "100%",
        }}
      >
        <Link href={subjectUrl}>
          <h1>{data.title}</h1>
        </Link>
        <SubjectMenu id={data.id} select={select} />
      </Header>
      <Layout style={{}}>
        <Sider style={{ margin: "20px 15px" }}>
          <Image width={180} src={data.img} style={{ margin: "10px 10px" }} />
          <Details data={data.details} />
        </Sider>

        <Content style={{ width: "120%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              width: "100%",
            }}
          >
            {reviewList.map((comment: CommentData) => {
              return <CommentShow {...comment} />;
            })}
          </div>
          <Pagination
            total={data.total}
            defaultPageSize={5}
            defaultCurrent={props.page}
            onChange={(pageNumber: number) => {
              setReviewList(
                data.comments.slice((pageNumber - 1) * 10, pageNumber * 10)
              );
            }}
          />
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  );
}
