import { Card, Divider, Image } from "@arco-design/web-react";
import { Link } from "react-router-dom";
import style from "@/style/component/DisplayBlock.module.scss";
import { IconLoading } from "@arco-design/web-react/icon";

type DisplayBlockProps = {
  category: string;
  categoryName: string;
  blockInfo?: {
    id: string;
    title: string;
    imgSrc: string;
    watching: number;
  }[];
};

function DisplayBlock(props: DisplayBlockProps) {
  return (
    <div>
      <div className={style.category}>{props.categoryName}</div>
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
                        src={item.imgSrc}
                        description={item.title}
                        style={{
                          textAlign: "left",
                          borderRadius: "7px 7px 0 0",
                        }}
                        preview={false}
                        loader={
                          <div
                            style={{
                              color: "black",
                              fontSize: "44",
                              textAlign: "center",
                            }}
                          >
                            <IconLoading />
                          </div>
                        }
                      />
                    }
                    bodyStyle={{ padding: "4px", border: "1 1 1 1" }}
                  >
                    <Card.Meta
                      description="2 watched"
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
