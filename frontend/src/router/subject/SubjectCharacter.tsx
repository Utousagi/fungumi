import { Link } from "react-router-dom";
import { Grid, Image, Layout } from "@arco-design/web-react";
import Detail from "@/components/Detail";

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
    <Grid.Row
      style={{
        alignSelf: "top",
        margin: "5px",
        border: "2px solid pink",
        WebkitBorderRadius: "5px",
      }}
    >
      <Grid.Col span={4} style={{ margin: "15px" }}>
        <Image src={props.data.img} width={100} />
      </Grid.Col>
      <Grid.Col span={6} style={{ textAlign: "left" }}>
        <Link to={`/character/${props.data.id}`}>
          <h3> {props.data.name}</h3>
        </Link>
        <p style={{ color: "darkgrey" }}>{props.data.description}</p>
      </Grid.Col>
      <Grid.Col span={12} style={{ textAlign: "left", marginTop: "2%" }}>
        <Detail data={props.data.details} />
      </Grid.Col>
    </Grid.Row>
  );
}

function SubjectCharacter() {
  return (
    <Layout.Content style={{ justifyContent: "start", padding: 0 }}>
      {data.character.map((data: CharacterDetailsData) => {
        return <CharacterShow data={data} />;
      })}
    </Layout.Content>
  );
}

export default SubjectCharacter;
