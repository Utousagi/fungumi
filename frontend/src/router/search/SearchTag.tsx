import { Link } from "react-router-dom";
import { Space, Tag } from "@arco-design/web-react";

function SearchTag() {
  return (
    <>
      <Space style={{ flexWrap: "wrap" }}>
        {Array.of(
          "异世界",
          "后宫",
          "已完结",
          "ロリなんてさいこう",
          "きょにゅうはダメ",
          "今日のご注文はうさぎですか",
          "四畳半",
          "夜は短し歩けよ乙女"
        ).map((item) => (
          <Link to={item}>
            <Tag
              size="medium"
              style={{
                display: "table-cell",
                fontSize: 15,
                verticalAlign: "top",
              }}
            >
              {item}
              <span style={{ color: "grey", fontSize: 9 }}>(1024)</span>
            </Tag>
          </Link>
        ))}
      </Space>
    </>
  );
}

export default SearchTag;
