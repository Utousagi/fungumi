import { Divider, Grid, Image, Layout, Menu } from "@arco-design/web-react";
import Header from "@arco-design/web-react/es/Layout/header";
import { createContext, useEffect, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import { getUserDataById, loadingUser, UserData } from "@/axios/User";

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

  const [userData, setUserData] = useState<UserData>(loadingUser);
  useEffect(() => {
    getUserDataById(id).then((res) => {
      setUserData(res as unknown as UserData);
      console.log(userData);
    });
  }, []);

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
                <Image
                  width={150}
                  height={150}
                  src={userData.avatar}
                  style={{}}
                />
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
                  {userData.username}
                </Link>
                <Divider style={{ marginTop: "2px" }} />
                <UserMenu
                  userId={userData.userId}
                  select={select}
                  setSelect={setSelect}
                />
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
