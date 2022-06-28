import { Card, Divider, Image, Spin } from "@arco-design/web-react";
import { Link } from "react-router-dom";
import style from "@/style/component/DisplayBlock.module.scss";
import { IndexBlockData } from "@/axios/types";

type DisplayBlockProps = {
  category: string;
  categoryName: string;
  blockInfo?: IndexBlockData[];
};

function DisplayBlock(props: DisplayBlockProps) {
  return (
    <div className={style.container}>
      <div className={style.category}>
        <Link to={`search/${props.category}`}>
          {props.categoryName} <span style={{ fontSize: "small" }}>more</span>
        </Link>
      </div>
      <Divider style={{ margin: "2px 0" }} />
      <Card bordered={false}>
        {props.blockInfo &&
          props.blockInfo.map((item) => {
            return (
              <Card.Grid
                key={item.id}
                hoverable
                style={{ margin: "10px", width: "100px", borderRadius: "7px" }}
              >
                <Link to={`subject/${item.id}`}>
                  <Card
                    bordered={false}
                    cover={
                      <Image
                        width={100}
                        height={90}
                        alt={item.title}
                        src={item.picture}
                        description={item.title}
                        style={{
                          textAlign: "left",
                          borderRadius: "7px 7px 0 0",
                        }}
                        preview={false}
                        loader={
                          <div
                            style={{
                              display: "block",
                              textAlign: "center",
                            }}
                          >
                            <Spin
                              size={25}
                              tip={item.title}
                              style={{ color: "black" }}
                            />
                          </div>
                        }
                      />
                    }
                    bodyStyle={{ padding: "4px", border: "1 1 1 1" }}
                  >
                    <Card.Meta
                      description={`${item.favoritePerson}人收藏`}
                      style={{
                        textAlign: "left",
                        fontSize: "x-small",
                        color: "#b29898",
                      }}
                    />
                  </Card>
                </Link>
              </Card.Grid>
            );
          })}
      </Card>
    </div>
  );
}

export default DisplayBlock;
