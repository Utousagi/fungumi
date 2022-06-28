import { Grid, Layout, Image, Divider, Menu } from "@arco-design/web-react";
import Header from "@arco-design/web-react/es/Layout/header";
import { createContext, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import { getUserDataById, UserData } from "@/axios/User";

function UserMenu(props: {
  userId: number;
  select: string;
  setSelect: (select: string) => void;
}) {
  var jumpUrl = "/user/" + props.userId;

  return (
    <Menu
      mode="horizontal"
      ellipsis={false}
      defaultSelectedKeys={[props.select]}
      style={{ width: "100%", alignContent: "start", marginBottom: "0px" }}
    >
      {userMenuItem.map((item) => {
        return (
          <Link
            to={jumpUrl + "/" + item.key}
            onClick={() => {
              props.setSelect(item.key);
            }}
          >
            <Menu.Item key={item.key}>{item.name}</Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
}

export const C = createContext("");

export default function UserHeader(props: { select?: string }) {
  const id = Number(useParams().id);
  const userUrl = "/user/" + id;

  const [userdata, setUserData] = useState<UserData>({
    userId: 0,
    username: "",
    avatar: "",
    description: "",
  });
  getUserDataById(id).then((res) => {
    console.log(res);
    // setUserData(res);
  });
  console.log(userdata);

  const [select, setSelect] = useState(
    useMatch("/user/:name/:select")?.params.select || "info"
  );

  return (
    <C.Provider value="">
      <div style={{ display: "block", width: "955px" }}>
        <Layout style={{ width: "95%" }}>
          <Header
            style={{
              width: "105%",
              alignSelf: "center",
              alignItems: "start",
              height: "100%",
            }}
          >
            <Grid.Row style={{ width: "95%" }}>
              <Grid.Col span={4} style={{ alignContent: "center" }}>
                <Image width={150} height={150} src={userdata.avatar} style={{}} />
              </Grid.Col>
              <Grid.Col
                span={16}
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link
                  to={userUrl}
                  style={{ fontSize: "36px", margin: "4px 20px" }}
                >
                  {userdata.username}
                </Link>
                <Divider style={{ marginTop: "2px" }} />
                <UserMenu userId={userdata.userId} select={select} setSelect={setSelect} />
              </Grid.Col>
            </Grid.Row>
          </Header>
          <Layout>
            <Outlet />
          </Layout>
        </Layout>
      </div>
    </C.Provider>
  );
}

const userMenuItem = [
  {
    key: "info",
    name: "个人",
  },
  {
    key: "favourite",
    name: "收藏",
  },
  {
    key: "review",
    name: "评论",
  },
  {
    key: "like",
    name: "点赞",
  },
];

// const data: UserData = {
//   userId: 1,
//   username: "ZeesangPie",
//   avatar:
//     "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
// };
