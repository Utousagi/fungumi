import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import { Button, Divider, Grid, Layout, Radio } from "@arco-design/web-react";

const dict: Record<string, string> = {
  anime: "动画",
  novel: "书籍",
  music: "音乐",
  game: "游戏",
};

function SideSearchBox(props: { selected: string }) {
  const location = useLocation().pathname;

  return (
    <div style={{ width: 230, margin: "5px 10px" }}>
      <Grid.Row>
        <h3 style={{ margin: "0 5px" }}>分类</h3>
      </Grid.Row>
      <Divider style={{ margin: "7px" }} />
      <Grid.Row>
        <Radio.Group style={{ textAlign: "left" }} value={props.selected}>
          {["anime", "novel", "game", "music"].map((item) => (
            <Radio style={{ margin: "3px 2px" }} value={item}>
              {({ checked }) => {
                return (
                  <Link to={location.replace(props.selected, item)}>
                    <Button
                      type={checked ? "primary" : "secondary"}
                      size="mini"
                    >
                      {dict[item]}
                    </Button>
                  </Link>
                );
              }}
            </Radio>
          ))}
        </Radio.Group>
      </Grid.Row>
      <br />
      <Grid.Row>
        <h3 style={{ margin: "0 5px" }}>查找方式</h3>
      </Grid.Row>
      <Grid.Row>
        <Link to={`/search/${props.selected}`}>
          <div style={{margin: "1px 5px", color: "coral"}}>查找全部</div>
        </Link>
      </Grid.Row>
      <Grid.Row>
        <Link to={`/search/${props.selected}/tag`}>
          <div style={{margin: "1px 5px", color: "coral"}}>按标签查找</div>
        </Link>
      </Grid.Row>
    </div>
  );
}

function Search(props: { category: string }) {
  const key = dict[props.category];
  const select = useMatch("/search/:select/*")?.params.select!;
  const tag = useParams<{ tag: string }>().tag;

  return (
    <Layout style={{ margin: "30px 10px", width: 955 }}>
      <Layout.Header
        style={{
          textAlign: "start",
          margin: "0 295px 0 45px",
        }}
      >
        <Routes>
          <Route
            path=""
            element={<h2 style={{ margin: "0 10px" }}>全部{key}</h2>}
          />
          <Route
            path="tag"
            element={<h2 style={{ margin: "0 10px" }}>{key}标签</h2>}
          />
          <Route
            path="tag/:tag"
            element={
              <h2 style={{ margin: "0 10px" }}>
                {key}标签：{tag}
              </h2>
            }
          />
        </Routes>
        <Divider style={{ margin: "5px 0" }} />
      </Layout.Header>
      <Layout style={{ width: 952 }}>
        <Layout.Content
          style={{
            overflowY: "hidden",
            margin: "0 50px",
            paddingTop: 0,
            alignItems: "start",
            justifyContent: "start"
          }}
        >
          <Outlet />
        </Layout.Content>
        <Layout.Sider width={250} style={{ boxShadow: "0 0 0" }}>
          <SideSearchBox selected={select} />
        </Layout.Sider>
      </Layout>
    </Layout>
  );
}

export default Search;
