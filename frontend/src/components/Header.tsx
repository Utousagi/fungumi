import React from "react";
import {
  Button,
  Dropdown,
  Input,
  Menu,
  Select,
  Space,
} from "@arco-design/web-react";
import "@/style/component/Header.module.scss";
import { Link } from "react-router-dom";
import AuthModal from "@/components/AuthModal";
import { IconCloud } from "@arco-design/web-react/icon";

type DropListProps = {
  name: string;
  href: string;
};

function dropList(props: DropListProps[]) {
  return (
    <Menu>
      {props.map((item, idx) => (
        <Menu.Item key={idx.toString()}>
          <Link to={item.href}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

const animeProps: DropListProps[] = [
  { name: "浏览全部", href: "/search/anime" },
  { name: "每日放送", href: "/calendar" },
  { name: "动画标签", href: "/tag/anime" },
  { name: "动画日志", href: "/anime/blog" },
];

const novelProps: DropListProps[] = [
  { name: "浏览全部", href: "/search/novel" },
  { name: "图书标签", href: "/tag/novel" },
  { name: "图书日志", href: "/novel/blog" },
];

const musicProps: DropListProps[] = [
  { name: "浏览全部", href: "/search/music" },
  { name: "音乐标签", href: "/tag/music" },
  { name: "音乐日志", href: "/music/blog" },
];

const gameProps: DropListProps[] = [
  { name: "浏览全部", href: "/search/game" },
  { name: "游戏标签", href: "/tag/game" },
  { name: "游戏日志", href: "/game/blog" },
];

function Header() {
  const [modalState, setModalState] = React.useState<{
    visible: boolean;
    type: "login" | "register";
  }>({ visible: false, type: "login" });

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
        </Space>
      </header>
      <AuthModal state={modalState} setState={setModalState} />
    </>
  );
}

export default Header;
