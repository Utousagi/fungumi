import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import { Button, Divider, Dropdown, Image, Layout, Menu, Tag } from "@arco-design/web-react";
import { CommentData } from "@/components/CommentShow";
import { characterData, labelData } from "@/router/subject/SubjectAbstract";
import Detail from "@/components/Detail";
import { useState } from "react";
import { type } from "os";

type SubjectData = {
  id: number;
  type: string;
  title: string;
  status: string;
  img: string;
  details: Map<string, string>;
};



function Subject() {
  const id = useParams<{ id: string }>().id;
  const select = useMatch("/subject/:id/:location")?.params.location!;
  const location = select ? select : "abstract";
  const dict: Record<string, string> = {
    abstract: "概览",
    character: "角色",
    staff: "制作人员",
    review: "评论",
  };
  const [status, setStatus] = useState(data.status);

  function typeChange(key: string) {
    setStatus(key);
    //TODO: 切换状态
  }

  function DropList(props: { status: string }) {
    const typeList: string[] = ['想看', '在看', '看过', '搁置', '抛弃'];
    return (
      <Menu onClickMenuItem={typeChange}>
        {typeList.map((typeNow: string) => {
          return (
            <Menu.Item key={typeNow}>{typeNow}</Menu.Item>
          )
        })}
        {props.status != '未收藏' ? <Menu.Item key={'取消'}>{'取消'}</Menu.Item> : null}
      </Menu>
    )
  }

  return (
    <Layout style={{ margin: "30px 10px", width: 955 }}>
      <Layout.Header style={{ textAlign: "start", margin: "0 0 0 0" }}>
        <div style={{ display: 'flex' }}>
          <h2 style={{ margin: "0 30px",width:'90%' }}>{data.title}<Tag style={{ margin: '2px 2px 2px 2px' }}>{data.type}</Tag></h2>
          <Dropdown
            position="bottom"
            droplist={<DropList status={status} />}
          >
            <Button shape="round" size="large" style={{ float:'right', marginBottom:'0px' }}>
              {status}
            </Button>
          </Dropdown>
        </div>
        <Divider style={{ margin: "5px 0" }} />
        <Menu
          mode="horizontal"
          ellipsis={false}
          defaultSelectedKeys={[location!]}
        >
          {Array.of("abstract", "character", "staff", "review").map((key) => (
            <Link to={key}>
              <Menu.Item key={key}>{dict[key]}</Menu.Item>
            </Link>
          ))}
        </Menu>
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
  status: "未收藏"
};
