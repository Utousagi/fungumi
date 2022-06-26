import { useState } from "react";
import { Avatar, Comment, Link, Rate } from "@arco-design/web-react";

import {
  IconStarFill,
  IconThumbDown,
  IconThumbDownFill,
  IconThumbUp,
  IconThumbUpFill,
} from "@arco-design/web-react/icon";

export type CommentData = {
  userId: string;
  avatar: string;
  score: number;
  time: string;
  content: string;
  like: boolean;
  dislike: boolean;
  likes: number;
};

export function CommentShow(props: {data: CommentData}) {
  function pressLike() {
    if (isSelf) {
      setLike(!like);
      setDislike(false);
      // TODO：调用喜欢接口
    }
  }

  function pressDislike() {
    if (isSelf) {
      setLike(false);
      setDislike(!dislike);
      // TODO：调用不喜欢接口
    }
  }

  const [like, setLike] = useState(props.data.like);
  const [dislike, setDislike] = useState(props.data.dislike);
  const likes: number = props.data.likes;
  const score: number = props.data.score / 2.0;
  //TODO: 是否自己的评论
  const isSelf = true;

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
          {props.data.userId}
          <Rate
            readonly
            defaultValue={score}
            allowHalf
            character={<IconStarFill style={{ fontSize: "13px" }} />}
            style={{ marginLeft: "15px" }}
          />
        </div>
      }
      content={<div>{props.data.content}</div>}
      avatar={
        <Link href={`/user/${props.data.userId}`} hoverable={false}>
          <Avatar>
            <img alt="avatar" src={props.data.avatar} />
          </Avatar>
        </Link>
      }
      datetime={props.data.time}
      style={{
        margin: "5px 3px 5px 5px",
        display: "flex",
        alignSelf: "center",
        textAlign: "left",
        width: "95%",
        border: "2px solid pink",
        borderRadius: "5px",
        padding: "5px",
      }}
    />
  );
}
