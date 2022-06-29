import {
  CommentData,
  getUserCommentListByPage,
  loadingReviewPage,
} from "@/axios/User";
import { Grid, Pagination } from "@arco-design/web-react";
import Content from "@arco-design/web-react/es/Layout/content";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CommentShow } from "@/components/CommentShow";

export default function Review(props: { page?: number } = { page: 1 }) {
  const id = Number(useParams().id);

  const [elements, setElements] = useState(0);
  const [reviewList, setReviewList] = useState(loadingReviewPage.reviews);

  useEffect(() => {
    getUserCommentListByPage(id, 1).then((data) => {
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
            return (
              <div style={{ textAlign: "left" }}>
                <div>
                  FROM{" "}
                  <Link to={"/subject/" + review.workId}>{review.workName}</Link>
                </div>
                <CommentShow data={review} />
              </div>
            );
          })}
        </Grid.Col>
      </Grid.Row>
      <Pagination
        total={elements}
        defaultPageSize={10}
        defaultCurrent={props.page}
        onChange={(pageNumber: number) => {
          getUserCommentListByPage(id, pageNumber).then((data) => {
            setReviewList(data.reviews);
          });
        }}
        style={{ marginTop: "10px" }}
      />
    </Content>
  );
}
