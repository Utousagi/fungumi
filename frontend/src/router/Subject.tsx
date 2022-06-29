import { Outlet, useMatch, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Divider,
  Dropdown,
  Image,
  Layout,
  Menu,
  Tabs,
  Tag,
} from "@arco-design/web-react";
import Detail from "@/components/Detail";
import { useEffect, useState } from "react";
import axios from "axios";

type SubjectData = {
  id: number;
  type: string;
  title: string;
  status: number;
  img: string;
  details: Map<string, string>;
};

export const favorDict: Record<number, string> = {
  0: "未收藏",
  1: "想看",
  2: "在看",
  3: "看过",
  4: "搁置",
  5: "抛弃",
  6: "取消",
};

export function DropList({ id, status, setStatus }: { id: number, status: number, setStatus: (key: number) => void }) {

  function typeChange(key: number) {
    setStatus(key);
    if (key == 6) key = 0;
    axios.post("/favorite/update?workId=" + id + "&type=" + key);
  }

  return (
    <Menu
      onClickMenuItem={(key) => typeChange(Number(key))}
      style={{ padding: 5 }}
      selectedKeys={[''+status]}
      levelIndent={0}
    >
      {[1, 2, 3, 4, 5].map((key) => {
        return (
          <Menu.Item
            key={key.toString()}
            style={{ width: 80, textAlign: "center" }}
          >
            {favorDict[key]}
          </Menu.Item>
        );
      })}
      {status != 0 ? (
        <Menu.Item key={"0"} style={{ width: 80, textAlign: "center" }}>
          {"取消"}
        </Menu.Item>
      ) : null}
    </Menu>
  )
}

function Subject() {
  const id = Number(useParams<{ id: string }>().id);

  const select = useMatch("/subject/:id/:select")?.params.select!;
  const selectDict: Record<string, string> = {
    abstract: "概览",
    character: "角色",
    staff: "制作人员",
    review: "评论",
  };

  const [status, setStatus] = useState(data.status);
  const nav = useNavigate();

  return (
    <Layout style={{ margin: "30px 10px", width: 955 }}>
      <Layout.Header style={{ textAlign: "start", margin: "0 0 0 0" }}>
        <div style={{ display: "flex" }}>
          <h2 style={{ margin: "0 30px", width: "90%" }}>
            {data.title}
            <Tag style={{ margin: "2px 2px 2px 2px" }}>{data.type}</Tag>
          </h2>

          <Dropdown position="bottom" droplist={DropList({id, status, setStatus})} trigger="click">
            <Button
              shape="round"
              size="large"
              style={{ float: "right", marginBottom: "0px", width: 90 }}
            >
              {favorDict[status]}
            </Button>
          </Dropdown>
        </div>
        <Divider style={{ margin: "5px 0" }} />
        <Tabs
          onClickTab={(k) => nav(k)}
          activeTab={select}
          animation={true}
          type="text"
          style={{ margin: "0 12px" }}
        >
          {Array.of("abstract", "character", "staff", "review").map((key) => (
            <Tabs.TabPane key={key} title={selectDict[key]} />
          ))}
        </Tabs>
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
  type: "动画",
  title: "阿比可爱捏🥰🥰🥰",
  img: "/src/assets/keep.jpg",
  details: new Map([
    ["语言", "C#,C++,Java,Python,Pascal,C,Go"],
    ["类型", "游戏"],
    ["状态", "进行中"],
  ]),
  status: 0,
};
