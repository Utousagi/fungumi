import { Layout, List, Space } from "@arco-design/web-react";
import pic from "@/assets/keep.jpg";
import ListItem from "@/components/ListItem";
import { SearchPageData } from "@/axios/Search";

const itemList:SearchPageData[] = [
  {
    id: 1,
    title: "suki",
    profile: "daisuki",
    score: 5,
    category: "anime",
    rateP: 100,
    rank: 1,
    picture: "/src/assets/keep.jpg",
    likes: 100,
  },
  {
    id: 2,
    title: "suki",
    profile: "daisuki",
    score: 5,
    rateP: 100,
    category: "anime",
    rank: 1,
    picture: "/src/assets/keep.jpg",
    likes: 100,
  },
  {
    id: 3,
    title: "daisuki",
    profile: "daisuki",
    score: 5,
    category: "anime",
    rateP: 100,
    rank: 1,
    likes: 100,
    picture: "/src/assets/keep.jpg",
  },
];

function SearchIndex() {
  return (
    <>
      <Layout.Content style={{ width: 600, padding: 0, alignItems: "start" }}>
        <Space size="medium" style={{ margin: "5px" }}>
          <div>rank</div>·<div>date</div>·<div>name</div>
        </Space>
      </Layout.Content>
      <List style={{ textAlign: "left" }}>
        {itemList.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </List>
      <br />
    </>
  );
}

export default SearchIndex;
