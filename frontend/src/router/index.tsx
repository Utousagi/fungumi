import { CommentShow } from "@/components/CommentShow";
import DisplayBlock from "@/components/DisplayBlock";
import { Layout } from "@arco-design/web-react";

type BlockInfo = {
  id: string;
  title: string;
  imgSrc: string;
  watching: number;
};

const blockInfo: BlockInfo[] = [
  {
    id: "1",
    title: "Block 1",
    imgSrc: "https://picsum.photos/200/300",
    watching: 0,
  },
  {
    id: "2",
    title: "Block 2",
    imgSrc: "https://picsum.photos/200/310",
    watching: 0,
  },
  {
    id: "3",
    title: "Block 3",
    imgSrc: "https://picsum.photos/200/320",
    watching: 0,
  },
  {
    id: "4",
    title: "Block 4",
    imgSrc: "https://picsum.photos/200/330",
    watching: 0,
  },
  {
    id: "5",
    title: "Block 5",
    imgSrc: "https://picsum.photos/200/340",
    watching: 0,
  },
  {
    id: "6",
    title: "Block 6",
    imgSrc: "https://picsum.photos/200/350",
    watching: 0,
  },
];

function Index() {
  return (
    <Layout>
      <Layout.Content>
        <DisplayBlock
          key="anime"
          category="anime"
          categoryName="动画"
          blockInfo={blockInfo}
        />
        <DisplayBlock
          key="novel"
          category="novel"
          categoryName="书籍"
          blockInfo={blockInfo}
        />
        <DisplayBlock
          key="music"
          category="music"
          categoryName="音乐"
          blockInfo={blockInfo}
        />
        <DisplayBlock
          key="game"
          category="game"
          categoryName="游戏"
          blockInfo={blockInfo}
        />
      </Layout.Content>
    </Layout>
  );
}

export default Index;
