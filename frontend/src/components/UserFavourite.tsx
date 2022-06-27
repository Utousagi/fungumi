import {
  Button,
  Dropdown,
  Image,
  Menu,
  Pagination,
  Rate,
  Tag,
} from "@arco-design/web-react";
import Divider from "@arco-design/web-react/es/Divider";
import Grid from "@arco-design/web-react/es/Grid";
import Content from "@arco-design/web-react/es/Layout/content";
import Link from "@arco-design/web-react/es/Link";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

export type UserData = {
  UserId: string;
  avatar: string;
};

type FavouritePageData = {
  user: UserData;
  favourites: FavouriteData[];
  total: number;
};

export type FavouriteData = {
  id: string;
  name: string;
  workType: string;
  image: string;
  type: string;
  rate: number;
  votes: number;
  description: string;
};

const data2: FavouriteData[] = [
  {
    id: "1",
    name: "cowboy bebop",
    workType: "动画",
    image: "/src/assets/keep.jpg",
    type: "想看",
    rate: 3.5,
    votes: 233,
    description:
      "本作的主人公。体型消瘦，留着一头类似爆炸头的头发，是Bebop号上的最早成员之一。\n在赏金猎人的工作中，因为懂得类似李小龙截拳道的武术，常担任战斗前线的罪犯逮捕工作，在驾驶经过改装的红色高速战机「剑鱼II」（ソードフィッシュII）时也表现出了过人的水准，喜欢使用的手枪是经过改造的Jericho941。\n以李小龙为偶像的斯派克自己也是截拳道的高手。三年前为了离开黑社会组织「红龙」曾经一度游走在生死边缘。\n现在和杰特一起乘坐着「比博普」号，过着穷困潦倒的日子。对于自己的过去，斯派克不愿意对别人详细提起。虽然已经从黑道引退却仍然过着吊儿郎当的生活。\n以前的经历使得他总是过分自信，老是做一些火中取栗的事情，屡次身陷险境。",
  },
  {
    id: "1",
    name: "cowboy bebop",
    workType: "动画",
    image:
      "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    type: "想看",
    rate: 3.5,
    votes: 233,
    description:
      "本作的主人公。体型消瘦，留着一头类似爆炸头的头发，是Bebop号上的最早成员之一。\n在赏金猎人的工作中，因为懂得类似李小龙截拳道的武术，常担任战斗前线的罪犯逮捕工作，在驾驶经过改装的红色高速战机「剑鱼II」（ソードフィッシュII）时也表现出了过人的水准，喜欢使用的手枪是经过改造的Jericho941。\n以李小龙为偶像的斯派克自己也是截拳道的高手。三年前为了离开黑社会组织「红龙」曾经一度游走在生死边缘。\n现在和杰特一起乘坐着「比博普」号，过着穷困潦倒的日子。对于自己的过去，斯派克不愿意对别人详细提起。虽然已经从黑道引退却仍然过着吊儿郎当的生活。\n以前的经历使得他总是过分自信，老是做一些火中取栗的事情，屡次身陷险境。",
  },
  {
    id: "1",
    name: "cowboy bebop",
    workType: "音乐",
    image:
      "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    type: "想看",
    rate: 3.5,
    votes: 233,
    description:
      "本作的主人公。体型消瘦，留着一头类似爆炸头的头发，是Bebop号上的最早成员之一。\n在赏金猎人的工作中，因为懂得类似李小龙截拳道的武术，常担任战斗前线的罪犯逮捕工作，在驾驶经过改装的红色高速战机「剑鱼II」（ソードフィッシュII）时也表现出了过人的水准，喜欢使用的手枪是经过改造的Jericho941。\n以李小龙为偶像的斯派克自己也是截拳道的高手。三年前为了离开黑社会组织「红龙」曾经一度游走在生死边缘。\n现在和杰特一起乘坐着「比博普」号，过着穷困潦倒的日子。对于自己的过去，斯派克不愿意对别人详细提起。虽然已经从黑道引退却仍然过着吊儿郎当的生活。\n以前的经历使得他总是过分自信，老是做一些火中取栗的事情，屡次身陷险境。",
  },
];

const data: UserData = {
  UserId: "ZeesangPie",
  avatar:
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
};

const data3: FavouritePageData = {
  user: data,
  favourites: data2,
  total: 22,
};

const favouriteTypeList: string[] = [
  "想看",
  "在看",
  "看过",
  "搁置",
  "抛弃",
  "取消",
];

function FavouriteShow(props: { data: FavouriteData; isSelf: boolean }) {
  var description = props.data.description;
  if (description.length > 120) {
    description = description.substring(0, 120) + "...";
  }

  var [type, setType] = useState(props.data.type);

  function typeChange(key: string) {
    setType(key);
    //TODO:调用收藏接口
  }

  function DropList() {
    return (
      <Menu onClickMenuItem={typeChange}>
        {favouriteTypeList.map((typeNow: string) => {
          return (
            <Menu.Item key={typeNow} disabled={!props.isSelf}>
              {typeNow}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }

  return (
    <div
      style={{
        width: "120%",
        marginBottom: "5px",
        border: "2px solid pink",
        borderRadius: "5px",
      }}
    >
      <Grid.Row>
        <Grid.Col span={6} style={{ display: "", alignContent: "center" }}>
          <Image
            src={props.data.image}
            height={160}
            style={{ margin: "5px 20px" }}
          />
        </Grid.Col>
        <Grid.Col
          span={15}
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link href={"/subject/" + props.data.id}>
            <div style={{ fontSize: "24px", margin: "5px 0px 0px 0px" }}>
              {props.data.name}
              <Tag style={{ marginLeft: "5px" }}>{props.data.workType}</Tag>
            </div>
          </Link>
          <div style={{ display: "inline", fontSize: "16px" }}>
            <Rate
              readonly
              defaultValue={props.data.rate}
              allowHalf
              style={{ margin: "0px 10px 0px 3px" }}
            />
            {props.data.votes}人评分
          </div>
          <Divider style={{ marginTop: "2px" }} />
          <div
            style={{
              fontSize: "8px",
              margin: "2px",
            }}
          >
            {description}
          </div>
        </Grid.Col>
        <Grid.Col span={2}>
          <Dropdown position="bottom" droplist={<DropList />}>
            <Button
              shape="round"
              size="large"
              style={{ margin: "2px", marginLeft: "20%", marginTop: "30%" }}
            >
              {type}
            </Button>
          </Dropdown>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
}

export default function Favourite(props: { page?: number } = { page: 1 }) {
  const id = useParams().id;
  var [favouriteList, setFavouriteList] = useState(data3.favourites);
  const isSelf = false;

  return (
    <Content>
      <Grid.Row style={{ width: "100%" }}>
        <Grid.Col
          offset={0}
          span={18}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {favouriteList.map((data: FavouriteData) => {
            return <FavouriteShow data={data} isSelf={isSelf} />;
          })}
        </Grid.Col>
      </Grid.Row>
      <Pagination
        total={data3.total}
        defaultPageSize={10}
        defaultCurrent={props.page}
        onChange={(pageNumber: number) => {
          setFavouriteList(
            data3.favourites.slice((pageNumber - 1) * 10, pageNumber * 10)
          );
        }}
        style={{ marginTop: "10px" }}
      />
    </Content>
  );
}
