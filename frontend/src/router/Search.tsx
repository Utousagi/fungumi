import { useParams, Link } from "react-router-dom";
import {
  Button,
  Divider,
  Grid,
  Image,
  Layout,
  List,
  Pagination,
  Radio,
  Rate,
  Space,
} from "@arco-design/web-react";
import pic from "@/assets/keep.jpg";
import { IconStarFill } from "@arco-design/web-react/icon";

type ListItemProps = {
  id: string;
  title: string;
  description: string;
  rate: number;
  rateP: number;
  rank: number;
  imgUrl: string;
};

function ListItem(props: ListItemProps) {
  return (
    <List.Item style={{ width: 600 }}>
      <List.Item.Meta
        title={
          <Space size="small">
            <Link to={`/subject/${props.id}`}>
              <div style={{ fontSize: 18 }}>{props.title}</div>
            </Link>
            <Rate
              value={props.rate / 2}
              readonly
              allowHalf
              character={<IconStarFill fontSize={14} />}
            />
            <Space size="medium">
              <span style={{ color: "gold", fontSize: 10 }}>
                <b>{props.rate}</b>
              </span>
              <span style={{ color: "grey", fontSize: 12 }}>
                共{props.rateP}人评分
              </span>
            </Space>
          </Space>
        }
        description={
          <div style={{ width: 450, wordWrap: "break-word" }}>
            {props.description}
          </div>
        }
        avatar={
          <Link to={`/subject/${props.id}`}>
            <Image src={props.imgUrl} height={100} width={80} preview={false} />
          </Link>
        }
        style={{ alignItems: "start" }}
      />
    </List.Item>
  );
}

function SideSearchBox() {
  return (
    <div style={{ width: 230, margin: "30px 10px" }}>
      <Grid.Row>
        <h3 style={{ margin: "0 5px" }}>分类</h3>
      </Grid.Row>
      <Divider style={{ margin: "7px" }} />
      <Grid.Row>
        <Radio.Group style={{ textAlign: "left" }}>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "dashed" : "secondary"} size="mini">
                  anime
                </Button>
              );
            }}
          </Radio>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "outline" : "secondary"} size="mini">
                  aaaaaaaaaanime
                </Button>
              );
            }}
          </Radio>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "outline" : "secondary"} size="mini">
                  anime
                </Button>
              );
            }}
          </Radio>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "outline" : "secondary"} size="mini">
                  anime
                </Button>
              );
            }}
          </Radio>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "outline" : "secondary"} size="mini">
                  anime
                </Button>
              );
            }}
          </Radio>
        </Radio.Group>
      </Grid.Row>
    </div>
  );
}

function Search(props: { category: string }) {
  const dict: Record<string, string> = {
    anime: "动画",
    novel: "书籍",
    music: "音乐",
    game: "游戏",
  };
  const key = dict[props.category];
  const tag = useParams<{ tag: string }>().tag;
  const itemList = [
    {
      id: "1",
      title: "suki",
      description: "daisuki",
      rate: 5,
      rateP: 100,
      rank: 1,
      imgUrl: pic,
    },
    {
      id: "2",
      title: "suki",
      description: "daisuki",
      rate: 5,
      rateP: 100,
      rank: 1,
      imgUrl: pic,
    },
    {
      id: "3",
      title: "daisuki",
      description: "daisuki",
      rate: 5,
      rateP: 100,
      rank: 1,
      imgUrl: pic,
    },
  ];

  return (
    <Layout>
      <Layout.Content style={{ overflowY: "hidden", margin: "0 50px" }}>
        <div
          style={{
            width: "600px",
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <h2 style={{ margin: "0 10px" }}>
            {tag ? `${key}标签：${tag}` : `全部${key}`}
          </h2>
          <Divider style={{ margin: "5px 0" }} />
          <Space size="medium" style={{ margin: "5px 10px" }}>
            <div>rank</div>·<div>date</div>·<div>name</div>
          </Space>
        </div>
        <List style={{ textAlign: "left" }}>
          {itemList.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </List>
        <br />
        <Pagination total={22} showTotal showJumper />
      </Layout.Content>
      <Layout.Sider width={250} style={{ boxShadow: "0 0 0" }}>
        <SideSearchBox />
      </Layout.Sider>
    </Layout>
  );
}

export default Search;
