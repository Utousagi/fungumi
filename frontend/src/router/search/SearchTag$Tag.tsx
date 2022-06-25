import pic from "@/assets/keep.jpg";
import { Layout, List, Space } from "@arco-design/web-react";
import ListItem from "@/components/ListItem";

const itemList = [
  {
    id: "1",
    title: "suki",
    description: "daisuki",
    rate: 5,
    rateP: 100,
    rank: 1,
    imgUrl: pic,
  },
  {
    id: "2",
    title: "suki",
    description: "daisuki",
    rate: 5,
    rateP: 100,
    rank: 1,
    imgUrl: pic,
  },
  {
    id: "3",
    title: "daisuki",
    description: "daisuki",
    rate: 5,
    rateP: 100,
    rank: 1,
    imgUrl: pic,
  },
];

function SearchTag$Tag() {
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
    </>
  );
}

export default SearchTag$Tag;
