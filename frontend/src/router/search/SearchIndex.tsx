import {
  Divider,
  Layout,
  List,
  Pagination,
  Tabs,
} from "@arco-design/web-react";
import ListItem from "@/components/ListItem";
import { getSubjects } from "@/axios/Search";
import { useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { SubjectData } from "@/axios/types";

function SearchIndex() {
  const select = useMatch("/search/:select/*")?.params?.select!;
  const [total, setTotal] = useState(0);
  const [subjects, setSubjects] = useState<SubjectData[]>([]);
  const [orderBy, setOrderBy] = useState("score");
  useEffect(() => {
    getSubjects({ category: select }).then((res) => {
      setSubjects(res.data);
      setTotal(res.totalCount);
      setOrderBy("score");
    });
  }, [select]);

  useEffect(() => {
    getSubjects({ category: select, orderBy: orderBy }).then((res) => {
      setSubjects(res.data);
    });
  }, [orderBy]);

  return (
    <>
      <Layout.Content
        style={{
          width: 600,
          padding: 0,
          alignItems: "start",
          justifyItems: "start",
        }}
      >
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
        {subjects.map((item: SubjectData) => (
          <ListItem key={item.id} {...item} />
        ))}
      </List>
      <Divider style={{ margin: "10px 0" }} />
      <Pagination
        total={total}
        showTotal
        showJumper
        onChange={(number) => {
          getSubjects({
            category: select,
            pageNo: number - 1,
            orderBy: orderBy,
          }).then((res) => {
            setSubjects(res.data);
          });
        }}
      />
    </>
  );
}

export default SearchIndex;
