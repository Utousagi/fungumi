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

type dropListProps = {
  name: string;
  href: string;
};

function dropList(props: dropListProps[]) {
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

function Header() {
  const animeProps: dropListProps[] = [
    { name: "浏览全部", href: "/anime/browser" },
    { name: "每日放送", href: "/calendar" },
    { name: "动画标签", href: "/anime/tag" },
    { name: "动画日志", href: "/anime/blog" },
  ];

  const novelProps: dropListProps[] = [
    { name: "浏览全部", href: "/novel/browser" },
    { name: "图书标签", href: "/novel/tag" },
    { name: "图书日志", href: "/novel/blog" },
  ];

  const musicProps: dropListProps[] = [
    { name: "浏览全部", href: "/music/browser" },
    { name: "音乐标签", href: "/music/tag" },
    { name: "音乐日志", href: "/music/blog" },
  ];

  const gameProps: dropListProps[] = [
    { name: "浏览全部", href: "/game/browser" },
    { name: "游戏标签", href: "/game/tag" },
    { name: "游戏日志", href: "/game/blog" },
  ];

  return (
    <>
      <header>
        <Space size="large">
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
              </Select>
            }
            size="small"
          />
          <Button.Group style={{ border: "medium" }}>
            <Button
              size="small"
              style={{ backgroundColor: "#ee9da4" }}
              shape="round"
            >
              登录
            </Button>
            <Button
              size="small"
              style={{ backgroundColor: "#ee9da4" }}
              shape="round"
            >
              注册
            </Button>
          </Button.Group>
        </Space>
      </header>
    </>
  );
}

export default Header;
