import React, { Dispatch, useEffect } from "react";
import {
  Avatar,
  Button,
  Dropdown,
  Image,
  Input,
  Menu,
  Select,
  Space,
} from "@arco-design/web-react";
import "@/style/component/Header.module.scss";
import { Link } from "react-router-dom";
import AuthModal from "@/components/AuthModal";
import {
  IconBackward,
  IconCloud,
  IconExport,
  IconUser,
} from "@arco-design/web-react/icon";
import axios from "axios";
import { Provider, useDispatch, useSelector } from "react-redux";
import userSlice, { userAction } from "@/redux/user";
import reduxStore, { RootState } from "@/redux/reduxStore";
import defaultAvatar from "@/assets/akarin.png";

type DropListProps = {
  name: string;
  href: string;
};

function dropList(props: DropListProps[]) {
  return (
    <Menu>
      {props.map((item, idx) => (
        <Link to={item.href} key={idx.toString()}>
          <Menu.Item key={idx.toString()}>{item.name}</Menu.Item>
        </Link>
      ))}
    </Menu>
  );
}

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

function UserBlock() {
  return (
    <>
      <Dropdown
        position="bottom"
        droplist={
          <Menu style={{ width: 100 }}>
            <Menu.Item key={"1"}>
              <IconUser />
              个人中心
            </Menu.Item>
            <Menu.Item key={"2"}>
              <IconExport />
              退出登录
            </Menu.Item>
          </Menu>
        }
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
  return (
    <>
      <header>
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
                defaultValue="全部"
              >
                <Select.Option value="1">全部</Select.Option>
                <Select.Option value="2">动画</Select.Option>
                <Select.Option value="3">书籍</Select.Option>
                <Select.Option value="4">音乐</Select.Option>
                <Select.Option value="5">游戏</Select.Option>
              </Select>
            }
            size="small"
          />
          <div style={{ width: 130, textAlign: "left" }}>
            {reduxStore.getState().user.isLogin ? (
              <UserBlock />
            ) : (
              <GuestBlock />
            )}
          </div>
        </Space>
      </header>
    </>
  );
}

export default Header;
