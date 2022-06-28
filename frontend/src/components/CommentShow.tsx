import { useState } from "react";
import { Avatar, Comment, Link, Rate } from "@arco-design/web-react";

import {
  IconStarFill,
  IconThumbUp,
  IconThumbUpFill,
} from "@arco-design/web-react/icon";
import { CommentData } from "@/axios/User";

export function CommentShow(props: { data: CommentData }) {
  function pressLike() {
    if (isSelf) {
      setLike(!like);
      // TODO：调用喜欢接口
    }
  }

  const [like, setLike] = useState(props.data.islike);
  const likes: number = props.data.likes;
  const score: number = props.data.score / 2.0;
  //TODO: 是否自己的评论
  const isSelf = true;

  const actions = [
    <span className="custom-comment-action" key="like" onClick={pressLike}>
      {like ? <IconThumbUpFill style={{ color: "f53f3f" }} /> : <IconThumbUp />}{" "}
      {likes + (like ? 1 : 0)}
    </span>,
  ];
  return (
    <Comment
      actions={actions}
      align="right"
      author={
        <div style={{display:'flex'}}>
          <div style={{margin:'8px 0px 0px 0px'}}>
            {props.data.username}
          </div>
          <Rate
            readonly
            defaultValue={score}
            allowHalf
            character={<IconStarFill style={{ fontSize: "13px" }} />}
            style={{ marginLeft: "15px", width: "500px" }}
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
      // datetime={<div style={{width:'', display:'block'}}>{props.data.time}</div>}
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
