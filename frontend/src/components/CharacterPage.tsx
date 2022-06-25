import { Link, Image, Divider } from "@arco-design/web-react";
import Layout from "@arco-design/web-react/es/Layout";
import Content from "@arco-design/web-react/es/Layout/content";
import Header from "@arco-design/web-react/es/Layout/header";
import Sider from "@arco-design/web-react/es/Layout/sider";
import { useParams } from "react-router-dom";
import { Details } from "./Abstract";

type ActInData = {
  id: number;
  name: string;
  image: string;
};

type CharacterPageData = {
  int: number;
  name: string;
  img: string;
  description: string;
  details: Map<string, string>;
  actIn: ActInData[];
};

let data: CharacterPageData = {
  int: 1,
  name: "Abigail",
  img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
  description:
    "本作的主人公。体型消瘦，留着一头类似爆炸头的头发，是Bebop号上的最早成员之一。\n在赏金猎人的工作中，因为懂得类似李小龙截拳道的武术，常担任战斗前线的罪犯逮捕工作，在驾驶经过改装的红色高速战机「剑鱼II」（ソードフィッシュII）时也表现出了过人的水准，喜欢使用的手枪是经过改造的Jericho941。\n以李小龙为偶像的斯派克自己也是截拳道的高手。三年前为了离开黑社会组织「红龙」曾经一度游走在生死边缘。\n现在和杰特一起乘坐着「比博普」号，过着穷困潦倒的日子。对于自己的过去，斯派克不愿意对别人详细提起。虽然已经从黑道引退却仍然过着吊儿郎当的生活。\n以前的经历使得他总是过分自信，老是做一些火中取栗的事情，屡次身陷险境。",
  details: new Map([
    ["语言", "C#,C++,Java,Python,Pascal,C,Go"],
    ["类型", "游戏"],
    ["状态", "进行中"],
  ]),
  actIn: [
    {
      id: 1,
      name: "cowboy bebop",
      image:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    },
    {
      id: 1,
      name: "cowboy bebop",
      image:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    },
    {
      id: 1,
      name: "cowboy bebop",
      image:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    },
  ],
};

export default function CharacterPage() {
  const id = useParams().id;
  const charactertUrl = "/character/" + id;

  return (
    <Layout style={{ width: "95%" }}>
      <Header
        style={{
          width: "105%",
          alignSelf: "center",
          flexDirection: "column",
          alignItems: "start",
          height: "100%",
        }}
      >
        <Link href={charactertUrl}>
          <h1>{data.name}</h1>
        </Link>
      </Header>
      <Layout>
        <Sider style={{ margin: "20px 15px" }}>
          <Image width={180} src={data.img} style={{ margin: "10px 10px" }} />
          <Details data={data.details} />
        </Sider>
        <Content
          style={{ alignItems: "start", margin: "10px", display: "block" }}
        >
          <div
            style={{
              textAlign: "left",
              whiteSpace: "pre-wrap",
              width: "95%",
              margin: "12px",
            }}
          >
            {data.description}
          </div>
          <Divider />
        </Content>
      </Layout>
    </Layout>
  );
}
