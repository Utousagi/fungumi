import {
  FavouriteData,
  getUserFavouriteListByPage,
  loadingFavouritePage,
} from "@/axios/User";
import { RootState } from "@/redux/reduxStore";
import {
  Button,
  Dropdown,
  Image,
  Menu,
  Pagination,
  Rate,
  Tag,
} from "@arco-design/web-react";
import Divider from "@arco-design/web-react/es/Divider";
import Grid from "@arco-design/web-react/es/Grid";
import Content from "@arco-design/web-react/es/Layout/content";
import Link from "@arco-design/web-react/es/Link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const favouriteTypeList: string[] = [
  "未收藏",
  "想 看",
  "在 看",
  "看 过",
  "搁 置",
  "抛 弃",
  "取 消",
];

function FavouriteShow(props: { data: FavouriteData; isSelf: boolean }) {
  var description = props.data.profile;
  if (description.length > 120) {
    description = description.substring(0, 120) + "...";
  }

  var [type, setType] = useState(props.data.type);

  function typeChange(key: string) {
    setType(favouriteTypeList.indexOf(key));
    var type: number = favouriteTypeList.indexOf(key);
    if (type <=0 ) return;
    if (type == 6) type = 0;
    console.log(axios.post("/favorite/update?workId=" + props.data.id + "&type=" + type));
  } 

  function DropList() {
    return (
      <Menu onClickMenuItem={typeChange}>
        {favouriteTypeList.map((typeNow: string) => {
          if (typeNow == favouriteTypeList[0]) return ;
          if (type == 0 && typeNow == favouriteTypeList[6]) return ;
          return (
            <Menu.Item key={typeNow} disabled={!props.isSelf}>
              {typeNow}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }

  return (
    <div
      style={{
        width: "120%",
        marginBottom: "5px",
        border: "2px solid pink",
        borderRadius: "5px",
      }}
    >
      <Grid.Row>
        <Grid.Col span={6} style={{ display: "", alignContent: "center" }}>
          <Image
            src={props.data.picture}
            height={160}
            style={{ margin: "5px 20px" }}
          />
        </Grid.Col>
        <Grid.Col
          span={15}
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link href={"/subject/" + props.data.id}>
            <div style={{ fontSize: "24px", margin: "5px 0px 0px 0px" }}>
              {props.data.title}
              <Tag style={{ marginLeft: "5px" }}>{props.data.category}</Tag>
            </div>
          </Link>
          <div style={{ display: "inline", fontSize: "16px" }}>
            <Rate
              readonly
              defaultValue={props.data.score}
              allowHalf
              style={{ margin: "0px 10px 0px 3px" }}
            />
            {props.data.votes}人评分
          </div>
          <Divider style={{ marginTop: "2px" }} />
          <div
            style={{
              fontSize: "8px",
              margin: "2px",
            }}
          >
            {description}
          </div>
        </Grid.Col>
        <Grid.Col span={2}>
          <Dropdown position="bottom" droplist={<DropList />}>
            <Button
              shape="round"
              size="large"
              style={{ margin: "2px", marginLeft: "20%", marginTop: "30%" }}
            >
              {favouriteTypeList[Number(type)]}
            </Button>
          </Dropdown>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
}

export default function Favourite(props: { page?: number } = { page: 1 }) {
  const id = Number(useParams().id);

  const [elements, setElements] = useState(0);
  const [favoriteList, setFavoriteList] = useState(
    loadingFavouritePage.favourites
  );

  useEffect(() => {
    getUserFavouriteListByPage(id, 1).then((data) => {
      if (data.works) {
        setElements(data.total);
        setFavoriteList(data.works);
      }
    });
  }, []);

  const isSelf = useSelector((state: RootState) => state.user.id) === id;

  return (
    <Content>
      <Grid.Row style={{ width: "100%" }}>
        <Grid.Col
          offset={0}
          span={18}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {favoriteList.map((data: FavouriteData) => {
            console.log(data);
            return <FavouriteShow data={data} isSelf={isSelf} />;
          })}
        </Grid.Col>
      </Grid.Row>
      <Pagination
        total={elements}
        defaultPageSize={10}
        defaultCurrent={props.page}
        onChange={(pageNumber: number) => {
          getUserFavouriteListByPage(id, 1).then((data) => {
            setFavoriteList(data.favorites);
          });
        }}
        style={{ marginTop: "10px" }}
      />
    </Content>
  );
}
