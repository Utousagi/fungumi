import {
  Comment,
  Divider,
  Grid,
  Image,
  Layout,
  Space,
  Tag,
} from "@arco-design/web-react";
import { Link, useParams } from "react-router-dom";
import { CommentShow } from "@/components/CommentShow";
import { IconStar } from "@arco-design/web-react/icon";
import { CommentData } from "@/axios/User";
import { useEffect, useState } from "react";
import { actorInfo, loadingWorkInfo, workInfo } from "@/axios/types";
import { getWorkInfo } from "@/axios/Work";



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
        <div style={{ fontSize: 20 }}>{props.score.toFixed(1)}</div>
        <div style={{ fontSize: 12, color: "darkgrey" }}>
          共{props.votes}人参与评分
        </div>
      </Space>
      <Divider style={{ margin: "5px 0", width: "90%" }} />
      <Space size="small" style={{ alignItems: "end", height:'150px' }}>
        {props.eachScores.map((score, index) => {
          return (
            <Grid.Col key={index} span={24}>
              <div
                style={{
                  height: (score/props.votes) * 130,
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

function Character(props: { data: actorInfo }) {
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
              {item.occupation}
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
function Labels(props: { category : string; title: string; data: labelData[] }) {
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
            <Link to={`/search/${props.category}/tag/${label.name}`}>
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
  const id = Number(useParams<{ id: string }>().id);
  const [data, setData] = useState<workInfo>(loadingWorkInfo);

  useEffect(() => {
    getWorkInfo(id).then((res) => {
      setData(res as unknown as workInfo);
      console.log(data);
    })
  }, []);

  var scoreData: ScoreData = {
    score: data.avgScore,
    rank: 0,
    votes: 0,
    eachScores: [0,0,0,0,0,0,0,0,0,0],
  }
  data.scoreMap.forEach(e => {
    scoreData.votes += e.number;
    scoreData.eachScores[e.score - 1] += e.number;
  });

  return (
    <>
      <Layout>
        <Layout.Content style={{ padding: 0 }}>
          <div
            style={{
              textAlign: "left",
              whiteSpace: "pre-wrap",
              width: "500px",
              marginTop: "5px",
            }}
          >
            {data.workProfile}
          </div>
          <Divider
            style={{
              borderBottomWidth: 2,
              borderBottomStyle: "dotted",
            }}
          />
          <Labels title={data.workTitle} data={data.tagResults} category={data.category} />
        </Layout.Content>
        <Layout.Sider style={{ margin: "10px 10px", padding: "5px" }}>
          <ScoreBox {...scoreData}/>
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
        {data.actor.map((character: actorInfo) => {
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
        {data.commentBeanPage.commentBeanList.map((comment: CommentData) => {
          return <CommentShow data={comment} />;
        })}
      </div>
    </>
  );
}

export default SubjectAbstract;

