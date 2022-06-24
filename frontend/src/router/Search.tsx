import { Outlet, Route, Routes, useParams } from "react-router-dom";
import { Button, Divider, Grid, Layout, Radio } from "@arco-design/web-react";

function SideSearchBox() {
  return (
    <div style={{ width: 230, margin: "30px 10px" }}>
      <Grid.Row>
        <h3 style={{ margin: "0 5px" }}>分类</h3>
      </Grid.Row>
      <Divider style={{ margin: "7px" }} />
      <Grid.Row>
        <Radio.Group style={{ textAlign: "left" }}>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "dashed" : "secondary"} size="mini">
                  anime
                </Button>
              );
            }}
          </Radio>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "outline" : "secondary"} size="mini">
                  aaaaaaaaaanime
                </Button>
              );
            }}
          </Radio>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "outline" : "secondary"} size="mini">
                  anime
                </Button>
              );
            }}
          </Radio>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "outline" : "secondary"} size="mini">
                  anime
                </Button>
              );
            }}
          </Radio>
          <Radio style={{ margin: "3px 3px" }}>
            {({ checked }) => {
              return (
                <Button type={checked ? "outline" : "secondary"} size="mini">
                  anime
                </Button>
              );
            }}
          </Radio>
        </Radio.Group>
      </Grid.Row>
    </div>
  );
}

function Search(props: { category: string }) {
  const dict: Record<string, string> = {
    anime: "动画",
    novel: "书籍",
    music: "音乐",
    game: "游戏",
  };
  const key = dict[props.category];
  const tag = useParams<{ tag: string }>().tag;

  return (
    <Layout style={{ margin: "30px 10px" }}>
      <Layout.Header
        style={{
          alignItems: "start",
          flexDirection: "column",
          background: "none",
          border: "none",
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
          style={{ overflowY: "hidden", margin: "0 50px", paddingTop: 0 }}
        >
          <Outlet />
        </Layout.Content>
        <Layout.Sider width={250} style={{ boxShadow: "0 0 0" }}>
          <SideSearchBox />
        </Layout.Sider>
      </Layout>
    </Layout>
  );
}

export default Search;
