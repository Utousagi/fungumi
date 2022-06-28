import {
  Divider,
  Layout,
  List,
  Pagination,
  Tabs,
} from "@arco-design/web-react";
import ListItem from "@/components/ListItem";
import { getSubjects } from "@/axios/Search";
import { useMatch, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SubjectData } from "@/axios/types";

function SearchTag$Tag() {
  const select = useMatch("/search/:select/*")?.params?.select!;
  const tag = useParams<"tag">().tag;
  const [total, setTotal] = useState(0);
  const [subjects, setSubjects] = useState<SubjectData[]>([]);
  const [orderBy, setOrderBy] = useState("score");
  useEffect(() => {
    getSubjects({ category: select, tag: tag }).then((res) => {
      setSubjects(res.data);
      setTotal(res.totalCount);
      setOrderBy("score");
    });
  }, [select]);
  useEffect(() => {
    getSubjects({ category: select, orderBy: orderBy, tag: tag }).then(
      (res) => {
        setSubjects(res.data);
      }
    );
  }, [orderBy]);

  return (
    <>
      <Layout.Content style={{ width: 600, padding: 0, alignItems: "start" }}>
        <Tabs
          type="text"
          onChange={(key) => setOrderBy(key)}
          activeTab={orderBy}
        >
          <Tabs.TabPane title="评分" key="score" />
          <Tabs.TabPane title="时间" key="releaseDate" />
          <Tabs.TabPane title="标题" key="title" />
        </Tabs>
      </Layout.Content>
      <List style={{ textAlign: "left" }}>
        {subjects.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </List>
      <Divider style={{ margin: "10px 0" }} />
      <Pagination total={total} showTotal showJumper />
    </>
  );
}

export default SearchTag$Tag;
