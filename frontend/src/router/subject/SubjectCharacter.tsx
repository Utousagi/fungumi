import { Link, useMatch, useParams } from "react-router-dom";
import { Grid, Image, Layout, Space } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import { getActors } from "@/axios/Subject";
import { ActorListInfo } from "@/axios/types";

function CharacterShow(props: { data: ActorListInfo }) {
  return (
    <Grid.Row
      style={{
        width: "90%",
        margin: "5px",
        border: "2px solid pink",
        WebkitBorderRadius: "5px",
      }}
    >
      <Grid.Col span={4} style={{ margin: "15px" }}>
        <Link to={`/character/${props.data.id}`}>
          <Image
            src={props.data.avatar}
            width={100}
            height={100}
            preview={false}
          />
        </Link>
      </Grid.Col>
      <Grid.Col span={18} style={{ textAlign: "start" }}>
        <Link to={`/character/${props.data.id}`}>
          <Space>
            <h3>{props.data.name}</h3>
            <p style={{ fontSize: 12, color: "grey" }}>
              {props.data.chineseName}
            </p>
          </Space>
        </Link>
        <div>{props.data.description}</div>
      </Grid.Col>
    </Grid.Row>
  );
}

function SubjectCharacter() {
  const id = useParams<"id">().id;
  const actorRole = useMatch("/subject/:id/:actor")?.params.actor!;
  const [actorData, setActorData] = useState<ActorListInfo[]>([]);
  useEffect(() => {
    getActors({ id: Number(id), role: actorRole }).then((res) => {
      setActorData(res.data);
    });
  }, [actorRole]);

  return (
    <Layout.Content style={{ alignItems: "start", padding: 0 }}>
      {actorData.map((data: ActorListInfo) => {
        return <CharacterShow data={data} />;
      })}
    </Layout.Content>
  );
}

export default SubjectCharacter;
