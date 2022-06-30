import { useState } from "react";
import { Avatar, Comment, Link, Message, Rate } from "@arco-design/web-react";

import {
  IconStarFill,
  IconThumbUp,
  IconThumbUpFill,
} from "@arco-design/web-react/icon";
import { CommentData } from "@/axios/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reduxStore";
import defaultAvatar from "@/assets/akarin.png";
import axios from "axios";

export function CommentShow(props: { data: CommentData }) {
  function pressLike() {
    if (!isLogin) {
      Message.warning("请先登录");
    } else {
      setLikes(likes + (like ? -1 : 1));
      setLike(!like);
      axios.post("/comment/thumbUp?commentId=" + props.data.id);
    }
  }

  const [like, setLike] = useState(props.data.hasLike);
  const [likes, setLikes] = useState(props.data.likes);
  const score: number = props.data.score / 2.0;
  //TODO: 是否自己的评论
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  const actions = [
    <span
      className="custom-comment-action"
      key="like"
      onClick={pressLike}
      style={{ margin: "0 15px" }}
    >
      {like ? <IconThumbUpFill style={{ color: "f53f3f" }} /> : <IconThumbUp />}{" "}
      {likes}
    </span>,
  ];
  return (
    <Comment
      actions={actions}
      align="right"
      author={
        <div style={{ display: "flex" }}>
          <div style={{ margin: "8px 0px 0px 0px" }}>{props.data.username}</div>
          <Rate
            readonly
            defaultValue={score}
            allowHalf
            character={<IconStarFill style={{ fontSize: "13px" }} />}
            style={{ marginLeft: "15px", width: "380px" }}
          />
        </div>
      }
      content={<div>{props.data.content}</div>}
      avatar={
        <Link href={`/user/${props.data.userId}`} hoverable={false}>
          <Avatar>
            <img alt="avatar" src={props.data.avatar ? props.data.avatar : defaultAvatar} style={{backgroundColor: "white"}} />
          </Avatar>
        </Link>
      }
      datetime={
        <div style={{ width: "", display: "block" }}>
          {props.data.time.slice(0, 10)}
        </div>
      }
      style={{
        margin: "5px 3px 5px 5px",
        display: "flex",
        alignSelf: "center",
        textAlign: "left",
        width: "670px",
        border: "2px solid pink",
        borderRadius: "5px",
        padding: "5px",
      }}
    />
  );
}
