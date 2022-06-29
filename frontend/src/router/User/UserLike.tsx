import {
  Grid,
  Pagination,
} from "@arco-design/web-react";
import Content from "@arco-design/web-react/es/Layout/content";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentData, getUserLikeListByPage, loadingReviewPage, ReviewPageData, UserData } from "@/axios/User";
import { CommentShow } from "../../components/CommentShow";

export default function Likes(props: { page?: number } = { page: 1 }) {
  const id = Number(useParams().id);

  const [elements, setElements] = useState(0);
  const [reviewList, setReviewList] = useState(loadingReviewPage.reviews);

  useEffect(() => {
    getUserLikeListByPage(id, 1).then((data) => {
      if (data.reviews) {
        setElements(data.total);
        setReviewList(data.reviews);
      }
      console.log(data);
    });
  }, []);

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
        total={elements}
        defaultPageSize={10}
        defaultCurrent={props.page}
        onChange={(pageNumber: number) => {
          getUserLikeListByPage(id, pageNumber).then((data) => {
            setReviewList(data.reviews);
          });
        }}
        style={{ marginTop: "10px" }}
      />
    </Content>
  );
}
