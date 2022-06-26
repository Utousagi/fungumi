import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import { Divider, Image, Layout, Menu } from "@arco-design/web-react";
import { CommentData } from "@/components/CommentShow";
import { characterData, labelData } from "@/router/subject/SubjectAbstract";
import Detail from "@/components/Detail";

type SubjectData = {
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

function Subject() {
  const id = useParams<{ id: string }>().id;
  const location = useMatch("/subject/:id/:location")?.params.location!;
  const dict: Record<string, string> = {
    abstract: "概览",
    character: "角色",
    staff: "制作人员",
    review: "评论",
  };

  return (
    <Layout style={{ margin: "30px 10px", width: 955 }}>
      <Layout.Header style={{ textAlign: "start", margin: "0 0 0 0" }}>
        <h2 style={{ margin: "0 30px" }}>{data.title}</h2>
        <Divider style={{ margin: "5px 0" }} />
        <Menu
          mode="horizontal"
          ellipsis={false}
          defaultSelectedKeys={[location!]}
        >
          {Array.of("abstract", "character", "staff", "review").map((key) => (
            <Link to={key}>
              <Menu.Item key={key}>{dict[key]}</Menu.Item>
            </Link>
          ))}
        </Menu>
      </Layout.Header>
      <Layout style={{ marginTop: 20 }}>
        <Layout.Sider width={210} style={{ padding: "0 10px" }}>
          <Image
            width={190}
            src={data.img}
            style={{ margin: "10px 10px", minHeight: 190 }}
            preview={false}
          />
          <Detail data={data.details} />
        </Layout.Sider>
        <Layout.Content
          style={{ margin: "0 0 0 10px", padding: 0, alignItems: "start" }}
        >
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default Subject;

const data: SubjectData = {
  id: 1,
  type: "anime",
  title: "阿比可爱捏🥰🥰🥰",
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
  img: "/src/assets/keep.jpg",
  details: new Map([
    ["语言", "C#,C++,Java,Python,Pascal,C,Go"],
    ["类型", "游戏"],
    ["状态", "进行中"],
  ]),
  comments: [
    {
      userId: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
      likes: 233,
    },
    {
      userId: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content:
        "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
      likes: 233,
    },
    {
      userId: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content:
        "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
      likes: 233,
    },
    {
      userId: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content:
        "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
      likes: 233,
    },
    {
      userId: "Abigail",
      avatar:
        "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
      score: 7,
      time: "Now",
      content:
        "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
      like: false,
      dislike: false,
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
