import { Layout, Link, Image, Grid, Divider } from "@arco-design/web-react";
import Content from "@arco-design/web-react/es/Layout/content";
import Footer from "@arco-design/web-react/es/Layout/footer";
import Header from "@arco-design/web-react/es/Layout/header";
import Sider from "@arco-design/web-react/es/Layout/sider";
import { type } from "os";
import { SubjectMenu, Details } from "./Abstract";
import { CommentData, CommentShow } from "./CommentShow";

export type CharacterDetailsData = {
  id: number;
  name: string;
  img: string;
  description: string;
  details: Map<string, string>;
};

export type CharacterPageData = {
  id: number;
  title: string;
  img: string;
  character: CharacterDetailsData[];
  details: Map<string, string>;
};

let data: CharacterPageData = {
  id: 1,
  title: "测试标题",
  img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
  character: [
    {
      id: 1,
      name: "阿比盖尔",
      img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
      description: "阿比盖尔可爱滴捏，贴贴",
      details: new Map([
        ["年龄", "12，但是合法了"],
        ["最喜欢的食物", "pancake"],
        ["测试3", "测试3"],
      ]),
    },
    {
      id: 2,
      name: "测试名字2",
      img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
      description: "测试描述2",
      details: new Map([
        ["测试1", "测试1"],
        ["测试2", "测试2"],
        ["测试3", "测试3"],
      ]),
    },
  ],
  details: new Map([
    ["语言", "C#,C++,Java,Python,Pascal,C,Go"],
    ["类型", "游戏"],
    ["状态", "进行中"],
  ]),
};

function CharacterShow(props: { data: CharacterDetailsData }) {
  return (
    <div style={{}}>
      <Grid.Row
        style={{
          alignSelf: "top",
          margin: "5px",
          border: "2px solid pink",
          WebkitBorderRadius: "10px",
        }}
      >
        <Grid.Col span={4} style={{ margin: "15px" }}>
          <Image src={props.data.img} width={160} />
        </Grid.Col>
        <Grid.Col span={6} style={{ textAlign: "left" }}>
          <Link href={"/character/" + props.data.id}>
            <h1> {props.data.name}</h1>
          </Link>
          <p>{props.data.description}</p>
        </Grid.Col>
        <Grid.Col span={12} style={{ textAlign: "left", marginTop: "2%" }}>
          <Details data={props.data.details} />
        </Grid.Col>
      </Grid.Row>
    </div>
  );
}

export default function Character(props: { type: string }) {
  const subjectUrl = "/subject/" + data.id;
  const select = props.type;

  return (
    <Layout style={{ width: "95%", height: "400px" }}>
      <Header
        style={{
          width: "105%",
          alignSelf: "center",
          flexDirection: "column",
          alignItems: "start",
          height: "100%",
        }}
      >
        <Link href={subjectUrl}>
          <h1 style={{ marginLeft: "30px" }}>{data.title}</h1>
        </Link>
        <SubjectMenu id={data.id} select={select} />
      </Header>
      <Layout>
        <Sider style={{ margin: "20px 15px" }}>
          <Image width={180} src={data.img} style={{ margin: "10px 10px" }} />
          <Details data={data.details} />
        </Sider>
        <Content style={{ alignItems: "start" }}>
          <Layout>
            <Content style={{ width: "90%" }}>
              <Divider />
              {data.character.map((data: CharacterDetailsData) => {
                return <CharacterShow data={data} />;
              })}
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  );
}
