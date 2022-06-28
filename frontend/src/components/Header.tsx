import React from "react";
import {
  Avatar,
  Button,
  Dropdown,
  Input,
  Menu,
  Select,
  Space,
} from "@arco-design/web-react";
import style from "@/style/component/Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "@/components/AuthModal";
import {
  IconCloud,
  IconExport,
  IconSettings,
  IconUser,
} from "@arco-design/web-react/icon";
import { useSelector } from "react-redux";
import reduxStore, { RootState } from "@/redux/reduxStore";
import defaultAvatar from "@/assets/akarin.png";
import { userAction } from "@/redux/userSlice";
import axios from "axios";

type DropListProps = {
  name: string;
  href: string;
};

function dropList(props: DropListProps[]) {
  return (
    <Menu style={{ padding: "5px" }}>
      {props.map((item, idx) => (
        <Link to={item.href} key={idx.toString()}>
          <Menu.Item key={idx.toString()}>{item.name}</Menu.Item>
        </Link>
      ))}
    </Menu>
  );
}

function UserBlock() {
  const nav = useNavigate();

  async function logout() {
    await axios.post("user/logout");
    reduxStore.dispatch(userAction.logout());
    nav("/");
  }

  return (
    <>
      <Dropdown
        position="bottom"
        droplist={
          <Menu style={{ width: 115, padding: "5px" }}>
            <Menu.Item key="space">
              <Space>
                <IconUser />
                个人空间
              </Space>
            </Menu.Item>
            <Menu.Item key="setting">
              <Space>
                <IconSettings />
                信息设置
              </Space>
            </Menu.Item>
            <Menu.Item key="logout" onClick={logout}>
              <Space>
                <IconExport />
                退出登录
              </Space>
            </Menu.Item>
          </Menu>
        }
        onVisibleChange={(visible) => {}}
      >
        <Avatar style={{ backgroundColor: "white" }}>
          <img
            src={
              reduxStore.getState().user.avatar
                ? reduxStore.getState().user.avatar
                : defaultAvatar
            }
            alt="avatar"
          />
        </Avatar>
      </Dropdown>
    </>
  );
}

function GuestBlock() {
  const [modalState, setModalState] = React.useState<{
    visible: boolean;
    type: "login" | "register";
  }>({ visible: false, type: "login" });

  return (
    <>
      <Button.Group style={{ border: "medium" }}>
        <Button
          size="small"
          style={{ backgroundColor: "#ee9da4" }}
          shape="round"
          onClick={() => {
            setModalState({ visible: true, type: "login" });
          }}
        >
          登录
        </Button>
        <Button
          size="small"
          style={{ backgroundColor: "#ee9da4" }}
          shape="round"
          onClick={() => {
            setModalState({ visible: true, type: "register" });
          }}
        >
          注册
        </Button>
      </Button.Group>
      <AuthModal state={modalState} setState={setModalState} />
    </>
  );
}

function Header() {
  const loadState = useSelector((state: RootState) => state.user.loaded);
  const loginState = useSelector((state: RootState) => state.user.isLogin);
  const dict: Record<string, string> = {
    all: "全部",
    anime: "动画",
    novel: "书籍",
    music: "音乐",
    game: "游戏",
  };
  const [searchCategory, setSearchCategory] = React.useState<string>("all");

  return (
    <>
      <header className={style.header}>
        <Space size="large">
          <Link to="/">
            <IconCloud fontSize={20} />
          </Link>
          <Button.Group>
            <Dropdown
              key="anime"
              position="bottom"
              droplist={dropList(animeProps)}
            >
              <Button size="small" shape="round">
                动画
              </Button>
            </Dropdown>
            <Dropdown
              key="novel"
              position="bottom"
              droplist={dropList(novelProps)}
            >
              <Button size="small">书籍</Button>
            </Dropdown>
            <Dropdown
              key="music"
              position="bottom"
              droplist={dropList(musicProps)}
            >
              <Button size="small">音乐</Button>
            </Dropdown>
            <Dropdown
              key="game"
              position="bottom"
              droplist={dropList(gameProps)}
            >
              <Button size="small" shape="round">
                游戏
              </Button>
            </Dropdown>
          </Button.Group>
        </Space>
        <Space size="large">
          <Input.Search
            addBefore={
              <Select
                style={{ width: "80px" }}
                size="small"
                className=""
                defaultValue={searchCategory}
              >
                {["all", "anime", "novel", "music", "game"].map((item) => (
                  <Select.Option
                    key={item}
                    value={item}
                    onClick={() => setSearchCategory(item)}
                  >
                    {dict[item]}
                  </Select.Option>
                ))}
              </Select>
            }
            size="small"
          />
          <div style={{ width: 130, textAlign: "left" }}>
            {loadState ? (
              reduxStore.getState().user.isLogin ? (
                <UserBlock />
              ) : (
                <GuestBlock />
              )
            ) : null}
          </div>
        </Space>
      </header>
    </>
  );
}

export default Header;

const animeProps: DropListProps[] = [
  { name: "浏览全部", href: "/search/anime" },
  { name: "动画标签", href: "/search/anime/tag" },
  { name: "动画日志", href: "/anime/blog" },
];

const novelProps: DropListProps[] = [
  { name: "浏览全部", href: "/search/novel" },
  { name: "图书标签", href: "/search/novel/tag" },
  { name: "图书日志", href: "/novel/blog" },
];

const musicProps: DropListProps[] = [
  { name: "浏览全部", href: "/search/music" },
  { name: "音乐标签", href: "/search/music/tag" },
  { name: "音乐日志", href: "/music/blog" },
];

const gameProps: DropListProps[] = [
  { name: "浏览全部", href: "/search/game" },
  { name: "游戏标签", href: "/search/game/tag" },
  { name: "游戏日志", href: "/game/blog" },
];
