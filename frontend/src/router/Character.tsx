import { Divider, Grid, Image, Link } from "@arco-design/web-react";
import Layout from "@arco-design/web-react/es/Layout";
import Content from "@arco-design/web-react/es/Layout/content";
import Header from "@arco-design/web-react/es/Layout/header";
import Sider from "@arco-design/web-react/es/Layout/sider";
import { useParams } from "react-router-dom";
import Detail from "@/components/Detail";
import { useEffect, useState } from "react";
import { ActorInfo, ActorWorkInfo, loadingActorInfo } from "@/axios/types";
import { getCharacterDetail } from "@/axios/Search";

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

function ActIn(props: { data: ActorWorkInfo }) {
  return (
    <Grid.Col
      offset={4}
      span={16}
      style={{
        alignContent: "start",
        margin: "3px 30px 8px 0",
        border: "2px solid pink",
        WebkitBorderRadius: "5px",
      }}
    >
      <Grid.Row>
        <Grid.Col span={5} style={{ display: "block", textAlign: "center" }}>
          <Image
            src={props.data.picture}
            width={80}
            height={80}
            style={{ margin: "5px", display: "flex" }}
          />
        </Grid.Col>
        <Grid.Col
          span={18}
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link href={"/subject/" + props.data.id}>
            <div style={{ fontSize: "18px", margin: "4px" }}>
              {props.data.title}
            </div>
          </Link>
          <Divider style={{ marginTop: "2px" }} />
        </Grid.Col>
      </Grid.Row>
    </Grid.Col>
  );
}

export default function Character() {
  const id = useParams<"id">().id;
  const [characterData, setCharacterData] =
    useState<ActorInfo>(loadingActorInfo);
  useEffect(() => {
    getCharacterDetail(Number(id)).then((res) => {
      console.log(res.data);
      setCharacterData(res.data);
    });
  }, []);

  return (
    <div style={{ width: "995px" }}>
      <Layout style={{ width: "95%" }}>
        <Header
          style={{
            width: "100%",
            textAlign: "left",
            flexDirection: "column",
            alignItems: "start",
            height: "100%",
          }}
        >
          {/* <Link href={characterUrl}> */}
          <h1 style={{ marginLeft: "30px" }}>{characterData.name}</h1>
          {/* </Link> */}
        </Header>
        <Layout>
          <Sider style={{ margin: "20px 15px" }}>
            <Image
              width={180}
              src={characterData.avatar}
              style={{ margin: "10px 10px", minHeight: 180 }}
            />
            <Detail data={characterData.params} />
          </Sider>
          <Content style={{ alignItems: "start", display: "block" }}>
            <div
              style={{
                textAlign: "left",
                whiteSpace: "pre-wrap",
                margin: "12px",
              }}
            >
              {characterData.description}
            </div>
            <Divider />
            <div
              style={{
                textAlign: "start",
                fontSize: "30px",
                marginBottom: "10px",
              }}
            >
              参与作品
            </div>
            <Grid.Row>
              {characterData.works.map((data) => {
                return <ActIn data={data} />;
              })}
            </Grid.Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
