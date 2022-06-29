import {
  Comment,
  Divider,
  Grid,
  Image,
  Layout,
  Space,
  Tag,
} from "@arco-design/web-react";
import { Link } from "react-router-dom";
import { CommentShow } from "@/components/CommentShow";
import { IconStar } from "@arco-design/web-react/icon";
import { CommentData } from "@/axios/User";

export type workData = {
  id: number;
  type: string;
  title: string;
  img: string;
  abstract: string;
  details: Map<string, string>;
  comments: CommentData[];
  labels: labelData[];
  totalScore: number;
  scores: number[];
  votes: number;
  characters: characterData[];
};

export type labelData = {
  name: string;
  id: number;
};

export type characterData = {
  name: string;
  id: number;
  abstract: string;
  img: string;
};

type ScoreData = {
  score: number;
  rank: number;
  votes: number;
  eachScores: number[];
};

function ScoreBox(props: ScoreData) {
  return (
    <div>
      <Space style={{ alignItems: "end" }}>
        <IconStar fontSize={20} />
        <div style={{ fontSize: 20 }}>{props.score}</div>
        <div style={{ fontSize: 12, color: "darkgrey" }}>
          共{props.votes}人参与评分
        </div>
      </Space>
      <Divider style={{ margin: "5px 0", width: "90%" }} />
      <Space size="small" style={{ alignItems: "end" }}>
        {props.eachScores.map((score, index) => {
          return (
            <Grid.Col key={index} span={24}>
              <div
                style={{
                  height: score * 10,
                  width: 10,
                  backgroundColor: "lightpink",
                }}
              />
              <div style={{ fontSize: 12 }}>{index + 1}</div>
            </Grid.Col>
          );
        })}
      </Space>
    </div>
  );
}

function Character(props: { data: characterData }) {
  const item = props.data;
  return (
    <Grid.Col span={8}>
      <Link to={`/character/${item.id}`}>
        <Comment
          author={
            <div style={{ fontSize: "15px", display: "contents" }}>
              {item.name}
            </div>
          }
          content={
            <div style={{ fontSize: "10px", color: "darkgrey" }}>
              {item.abstract}
            </div>
          }
          avatar={
            <Image
              alt="avatar"
              src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
              preview={false}
              width={50}
              height={50}
            />
          }
          style={{ textAlign: "left", width: "100%", marginTop: "5px" }}
        />
      </Link>
    </Grid.Col>
  );
}
function Labels(props: { title: string; data: labelData[] }) {
  return (
    <div
      style={{
        width: "99%",
        alignContent: "start",
        border: "2px solid pink",
        borderRadius: "5px",
      }}
    >
      <div style={{ textAlign: "left", margin: "5px 10px" }}>
        大家将 <b>{props.title}</b> 标注为
      </div>
      <Space
        wrap
        size={[6, 8]}
        style={{ width: "100%", marginTop: "5px", marginLeft: "8px" }}
      >
        {props.data.map((label: labelData) => {
          return (
            <Link to={`/search/${data.type}/tag/${label.name}`}>
              {" "}
              <Tag key={label.id} defaultChecked={true} color="arcoblue">
                <div style={{ fontSize: "15px" }}>{label.name}</div>
              </Tag>
            </Link>
          );
        })}
      </Space>
    </div>
  );
}

function SubjectAbstract() {
  return (
    <>
      <Layout>
        <Layout.Content style={{ padding: 0 }}>
          <div
            style={{
              textAlign: "left",
              whiteSpace: "pre-wrap",
              width: "95%",
              marginTop: "5px",
            }}
          >
            {data.abstract}
          </div>
          <Divider
            style={{
              borderBottomWidth: 2,
              borderBottomStyle: "dotted",
            }}
          />
          <Labels title={data.title} data={data.labels} />
        </Layout.Content>
        <Layout.Sider style={{ margin: "10px 10px", padding: "5px" }}>
          <ScoreBox
            score={7.5}
            rank={100}
            votes={233}
            eachScores={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
        </Layout.Sider>
      </Layout>
      <Divider
        style={{
          borderBottomWidth: 2,
          borderBottomStyle: "dotted",
        }}
      />
      <h3 style={{ margin: "0 25px" }}>角色介绍</h3>
      <Grid.Row style={{ alignSelf: "center", margin: "0 25px" }}>
        {data.characters.map((character: characterData) => {
          return <Character key={character.id} data={character} />;
        })}
      </Grid.Row>
      <Divider
        style={{
          borderBottomWidth: 2,
          borderBottomStyle: "dotted",
        }}
      />
      <h3 style={{ margin: "10px 25px" }}>用户评价</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          margin: "0 20px",
        }}
      >
        {data.comments.map((comment: CommentData) => {
          return <CommentShow data={comment} />;
        })}
      </div>
    </>
  );
}

export default SubjectAbstract;

let data: workData = {
  id: 1,
  type: "anime",
  title: "测试标题",
  abstract:
    "記憶(おもいで)は消えない…" +
    " \n " +
    "本編全105曲+ジングル16曲+ピアノアレンジ5曲の全126曲、約6時間の大ボリュームを全て余すことなく収録した音楽コンプリート盤!" +
    " \n " +
    "2017年12月1日に任天堂株式会社から発売された、Nintendo Switch『ゼノブレイド2』本編に使用された全105曲と" +
    " \n " +
    "ジングル16曲、ピアノアレンジ5曲をCD6枚組にて全て収録した音楽コンプリート盤オリジナル・サウンドトラック。" +
    " \n " +
    "収録時間約6時間の大ボリュームな内容。高橋哲哉(ゼノシリーズ監督)と光田康典の強力コラボは、往年の「ゼノ」ファンにとってはたまらない作品であること間違いなし。" +
    " \n " +
    "サウンド面では、音楽総合プロデューサー兼作曲の光田康典に加え、作曲陣として、初代『ゼノブレイド』でも高い評価を得たACE(工藤ともり、CHiCO)、平松建治、清田愛未を迎えた。" +
    " \n " +
    "また、世界的に高い評価を受けているアイルランドのコーラス・グループANÚNA(アヌーナ)や、神奈川フィルハーモニー管弦楽団、Bratislava Symphony Choirをはじめとした豪華なミュージシャンが多数参加している。" +
    " \n ",
  img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
  details: new Map([
    ["语言", "C#,C++,Java,Python,Pascal,C,Go"],
    ["类型", "游戏"],
    ["状态", "进行中"],
  ]),
  comments: [
    {
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
    {
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
    {
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
    {
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
    {
      userId: 1,
      username: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      workId: 1,
      workName: "测试标题",
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      hasLike: false,
      likes: 233,
    },
  ],
  labels: [
    {
      name: "游戏",
      id: 1,
    },
    {
      name: "音乐",
      id: 2,
    },
    {
      name: "动画",
      id: 3,
    },
    {
      name: "小说",
      id: 4,
    },
  ],
  totalScore: 10,
  scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
  votes: 0,
  characters: [
    {
      id: 1,
      name: "高橋哲哉",
      abstract: "ゼノシリーズ監督",
      img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    },
    {
      id: 1,
      name: "光田康典",
      abstract: "ゼノシリーズ監督",
      img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    },
    {
      id: 2,
      name: "工藤ともり",
      abstract: "CHiCO",
      img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    },
    {
      id: 2,
      name: "平松建治",
      abstract: "CHiCO",
      img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    },
    {
      id: 2,
      name: "清田愛未",
      abstract: "CHiCO",
      img: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
    },
  ],
};
