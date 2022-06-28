import { Link, useMatch } from "react-router-dom";
import { Divider, Pagination, Space, Tag } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import { getTags } from "@/axios/Search";
import { TagData } from "@/axios/types";

function SearchTag() {
  const [total, setTotal] = useState(0);
  const select = useMatch("/search/:select/tag")?.params.select!;
  const pageSize = 100;
  const [tags, setTags] = useState<TagData[]>([]);

  useEffect(() => {
    getTags({ category: select }).then((res) => {
      setTotal(res.totalCount);
      setTags(res.data);
    });
  }, [select]);

  return (
    <>
      <Space style={{ display: "flex", flexWrap: "wrap", alignItems: "start" }}>
        {tags.map((item) => (
          <Link to={item.name}>
            <Tag
              size="medium"
              style={{
                display: "table-cell",
                fontSize: 15,
                verticalAlign: "top",
              }}
            >
              {item.name}
              <span style={{ color: "grey", fontSize: 9 }}>
                ({item.relatedWork})
              </span>
            </Tag>
          </Link>
        ))}
      </Space>
      <Divider style={{ margin: "10px 0" }} />
      <Pagination
        total={total}
        pageSize={pageSize}
        showTotal
        showJumper
        onChange={(number) => {
          getTags({ category: select, pageNo: number - 1 }).then((res) => {
            setTags(res.data);
          });
        }}
      />
    </>
  );
}

export default SearchTag;
