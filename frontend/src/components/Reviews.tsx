import { Layout, Link, Image, Slider } from "@arco-design/web-react";
import Content from "@arco-design/web-react/es/Layout/content";
import Footer from "@arco-design/web-react/es/Layout/footer";
import Header from "@arco-design/web-react/es/Layout/header";
import Sider from "@arco-design/web-react/es/Layout/sider";
import { characterData, Details, SubjectMenu } from "./Abstracr";
import { CommentData, CommentShow } from "./CommentShow";

type CommentPageData = {
    id: number;
    title: string;
    img: string;
    comments: CommentData[];
    details: Map<string, string>;
}

let props: CommentPageData = {
    id: 1,
    title: "测试标题",
    img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    comments: [{
        userId: "Abigail",
        avator: "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
        score: 7,
        time: "Now",
        content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
        like: false,
        dislike: false,
        likes: 233
    }, {
        userId: "Abigail",
        avator: "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
        score: 7,
        time: "Now",
        content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
        like: false,
        dislike: false,
        likes: 233
    }, {
        userId: "Abigail",
        avator: "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
        score: 7,
        time: "Now",
        content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
        like: false,
        dislike: false,
        likes: 233
    }, {
        userId: "Abigail",
        avator: "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
        score: 7,
        time: "Now",
        content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
        like: false,
        dislike: false,
        likes: 233
    }, {
        userId: "Abigail",
        avator: "https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
        score: 7,
        time: "Now",
        content: "可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
        like: false,
        dislike: false,
        likes: 233
    },],
    details: new Map([
        ['语言', 'C#,C++,Java,Python,Pascal,C,Go'],
        ['类型', '游戏'],
        ['状态', '进行中'],
    ]),
}

export default function Reviews() {

    const subjectUrl = '/subject/' + props.id;
    const select = 'reviews';

    return (
        <Layout style={{ width: "95%", height: '400px' }}>
            <Header style={{ width: '105%', alignSelf: 'center', flexDirection: "column", alignItems: "start", height: "100%" }}>
                <Link href={subjectUrl}><h1>{props.title}</h1></Link>
                <SubjectMenu id={props.id} select={select} />
            </Header>
            <Layout>
                <Sider>
                    <Image
                        width={200}
                        src={props.img}
                    />
                    <Details data={props.details} />

                </Sider>
                <Content style={{ alignItems: "start" }}>
                    <Layout>
                        <Content>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', width: "100%" }}>
                                {props.comments.map((comment: CommentData) => {
                                    return (
                                        <CommentShow {...comment} />
                                    )
                                })
                                }
                            </div>
                        </Content>
                        <Sider>
                            
                        </Sider>
                    </Layout>
                </Content>
            </Layout>
            <Footer>

            </Footer>
        </Layout>
    );
}