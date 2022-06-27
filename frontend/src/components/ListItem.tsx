import { Image, List, Rate, Space } from "@arco-design/web-react";
import { Link } from "react-router-dom";
import { IconStarFill } from "@arco-design/web-react/icon";
import { SearchPageData } from "@/axios/Search";

function ListItem(props: SearchPageData) {
  return (
    <List.Item style={{ width: 600 }}>
      <List.Item.Meta
        title={
          <Space size="small">
            <Link to={`/subject/${props.id}`}>
              <div style={{ fontSize: 18 }}>{props.title}</div>
            </Link>
            <Rate
              value={props.score / 2}
              readonly
              allowHalf
              character={<IconStarFill fontSize={14} />}
            />
            <Space size="medium">
              <span style={{ color: "gold", fontSize: 10 }}>
                <b>{props.score}</b>
              </span>
              <span style={{ color: "grey", fontSize: 12 }}>
                共{props.rateP}人评分
              </span>
            </Space>
          </Space>
        }
        description={
          <div style={{ width: 450, wordWrap: "break-word" }}>
            {props.profile}
          </div>
        }
        avatar={
          <Link to={`/subject/${props.id}/abstract`}>
            <Image src={props.picture} height={100} width={80} preview={false} />
          </Link>
        }
        style={{ alignItems: "start" }}
      />
    </List.Item>
  );
}

export default ListItem;
