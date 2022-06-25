import { useState } from "react";
import { Avatar, Comment, Rate } from "@arco-design/web-react";
import {
  IconStarFill,
  IconThumbDown,
  IconThumbDownFill,
  IconThumbUp,
  IconThumbUpFill,
} from "@arco-design/web-react/icon";

export type CommentData = {
  userId: string;
  avator: string;
  score: number;
  time: string;
  content: string;
  like: boolean;
  dislike: boolean;
  likes: number;
};

export function CommentShow(props: CommentData) {
  function pressLike() {
    setLike(!like);
    setDislike(false);
    // TODO：调用喜欢接口
  }

  function pressDislike() {
    setLike(false);
    setDislike(!dislike);
    // TODO：调用不喜欢接口
  }

  const [like, setLike] = useState(props.like);
  const [dislike, setDislike] = useState(props.dislike);
  const likes: number = props.likes;
  const score: number = props.score / 2.0;

  const actions = [
    <span className="custom-comment-action" key="like" onClick={pressLike}>
      {like ? <IconThumbUpFill style={{ color: "f53f3f" }} /> : <IconThumbUp />}{" "}
      {likes + (like ? 1 : 0)}
    </span>,
    <span
      className="custom-comment-action"
      key="dislike"
      onClick={pressDislike}
    >
      {dislike ? (
        <IconThumbDownFill style={{ color: "f53f3f" }} />
      ) : (
        <IconThumbDown />
      )}
    </span>,
  ];
  return (
    <Comment
      actions={actions}
      align="right"
      author={
        <div>
          {props.userId}
          <Rate
            readonly
            defaultValue={score}
            allowHalf
            character={<IconStarFill style={{ fontSize: "13px" }} />}
            style={{ marginLeft: "15px" }}
          />
        </div>
      }
      content={<div>{props.content}</div>}
      avatar={
        <Avatar>
          <img alt="avatar" src={props.avator} />
        </Avatar>
      }
      datetime={props.time}
      style={{
        display: "flex",
        alignSelf: "center",
        textAlign: "left",
        width: "90%",
        border: "2px solid pink",
        borderRadius: "5px",
        padding: "10px",
      }}
    />
  );
}
