import DisplayBlock from "@/components/DisplayBlock";
import { Layout } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import { IndexData } from "@/axios/types";
import { getIndexDisplay } from "@/axios/Search";

function Index() {
  const [displayData, setDisplayData] = useState<IndexData>({
    anime: [],
    novel: [],
    game: [],
    music: [],
  });
  useEffect(() => {
    getIndexDisplay().then((res) => {
      setDisplayData(res.data);
    });
  }, []);

  return (
    <Layout>
      <Layout.Content>
        <DisplayBlock
          key="anime"
          category="anime"
          categoryName="动画"
          blockInfo={displayData.anime}
        />
        <DisplayBlock
          key="novel"
          category="novel"
          categoryName="书籍"
          blockInfo={displayData.novel}
        />
        <DisplayBlock
          key="music"
          category="music"
          categoryName="音乐"
          blockInfo={displayData.music}
        />
        <DisplayBlock
          key="game"
          category="game"
          categoryName="游戏"
          blockInfo={displayData.game}
        />
      </Layout.Content>
    </Layout>
  );
}

export default Index;
