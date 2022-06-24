import { Avatar, Comment, Descriptions, Divider, Grid, Image, Layout, Link, Menu, Space, Tag } from "@arco-design/web-react";
import Content from "@arco-design/web-react/es/Layout/content";
import Header from "@arco-design/web-react/es/Layout/header";
import Sider from "@arco-design/web-react/es/Layout/sider";
import { useParams } from "react-router-dom";
import { CommentData, CommentShow } from "./CommentShow";

export type workData = {
    id: number;
    type: string;
    title: string;
    img: string;
    abstract: string;
    details: Map<string, string>;
    comments: CommentData[];
    labels: labelData[];
    totalScore: number;
    scores: number[];
    votes: number;
    characters: characterData[];
}

export type labelData = {
    name: string;
    id: number;
}

export type characterData = {
    name: string;
    id: number;
    abstract: string;
    img: string;
}

export function SubjectMenu(props: { id: number, select: string }) {
    var jumpUrl = '/subject/' + props.id;

    function jump(key: string) {
        switch (key) {
            case 'abstract':
                jumpUrl += '/abstract';
                break;
            case 'character':
                jumpUrl += '/character';
                break
            case 'staff':
                jumpUrl += '/staff';
                break
            case 'reviews':
                jumpUrl += '/reviews';
                break
        }
        window.location.href = jumpUrl;
    }

    return (
        <Menu mode='horizontal' ellipsis={false} defaultSelectedKeys={[props.select]} onClickMenuItem={jump} style={{ width: '100%', alignContent: 'start' }}>
            <Menu.Item key='abstract' >概览</Menu.Item>
            <Menu.Item key='character'>角色</Menu.Item>
            <Menu.Item key='staff'>Staff</Menu.Item>
            <Menu.Item key='reviews'>评论</Menu.Item>
        </Menu>
    )
}

export function Details(props: { data: Map<string, string> }) {
    var data = [];
    for (let key of props.data.keys()) {
        data.push({
            label: key,
            value: props.data.get(key),
        })
    }
    return (
        <Descriptions
            column={1}
            data={data}
            border={false}
            tableLayout='fixed'
            valueStyle={{ wordWrap: 'break-word' }}
        />
    )
}

function Character(props: { data: characterData }) {
    var item = props.data;
    return (
        <Grid.Col span={8}>
            <Comment author={item.name} content={item.abstract} avatar={<Avatar>
                <Image
                    alt='avatar'
                    src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp'
                    preview={false}
                    onClick={() => {
                        window.location.href = '/character/' + item.id;
                    }}
                />
            </Avatar>} style={{ alignContent: 'left', width: '100%' }} />
        </Grid.Col>
    )
}
function Labels(props: { title: string, data: labelData[] }) {
    return (
        <div style={{ width: '98%', alignContent: 'start', border: '2px solid grey' }}>
            <div style={{ textAlign: 'left' }}>大家将 {props.title} 标注为</div>
            <Space wrap size={[12, 8]} style={{ width: '100%' }}>

                {props.data.map((label: labelData) => {
                    return (
                        <Link href={'/label/' + label.id}> <Tag key={label.id} defaultChecked={true} color='arcoblue'>{label.name}</Tag> </Link>
                    )
                })}
            </Space>
        </div>
    )
}
export default function Abstract() {
    let params = useParams();
    const select = 'abstract';
    var subjectUrl = `/subject/${params.id}/abstract`;

    return (
        <Layout style={{ width: "95%" }}>
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
                            <div style={{ textAlign: 'left', whiteSpace: 'pre-wrap', width: '95%', marginTop: '5px' }}>
                                {props.abstract}
                            </div>
                            <Divider
                                style={{
                                    borderBottomWidth: 2,
                                    borderBottomStyle: 'dotted',
                                }}
                            />
                            <Labels title={props.title} data={props.labels} />
                        </Content>
                        <Sider>
                            <div>
                                评分人数: {props.votes}
                            </div>
                        </Sider>
                    </Layout>
                    <Divider
                        style={{
                            borderBottomWidth: 2,
                            borderBottomStyle: 'dotted',
                        }}
                    />
                    <h2>角色介绍</h2>
                    <Grid.Row className="ji" style={{ alignSelf: 'center' }}>
                        {props.characters.map((character: characterData) => {
                            return (
                                <Character key={character.id} data={character} />
                            )
                        })}
                    </Grid.Row>
                    <Divider
                        style={{
                            borderBottomWidth: 2,
                            borderBottomStyle: 'dotted',
                        }}
                    />
                    <h2>用户评价</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', width: "100%" }}>
                        {props.comments.map((comment: CommentData) => {
                            return (
                                <CommentShow {...comment} />
                            )
                        })
                        }
                    </div>
                </Content>
            </Layout>
        </Layout>

    );
}

let props: workData = {
    id: 1,
    type: 'anime',
    title: "测试标题",
    abstract: "記憶(おもいで)は消えない…" + ' \n ' +
        "本編全105曲+ジングル16曲+ピアノアレンジ5曲の全126曲、約6時間の大ボリュームを全て余すことなく収録した音楽コンプリート盤!" + ' \n ' +
        "2017年12月1日に任天堂株式会社から発売された、Nintendo Switch『ゼノブレイド2』本編に使用された全105曲と" + ' \n ' +
        "ジングル16曲、ピアノアレンジ5曲をCD6枚組にて全て収録した音楽コンプリート盤オリジナル・サウンドトラック。" + ' \n ' +
        "収録時間約6時間の大ボリュームな内容。高橋哲哉(ゼノシリーズ監督)と光田康典の強力コラボは、往年の「ゼノ」ファンにとってはたまらない作品であること間違いなし。" + ' \n ' +
        "サウンド面では、音楽総合プロデューサー兼作曲の光田康典に加え、作曲陣として、初代『ゼノブレイド』でも高い評価を得たACE(工藤ともり、CHiCO)、平松建治、清田愛未を迎えた。" + ' \n ' +
        "また、世界的に高い評価を受けているアイルランドのコーラス・グループANÚNA(アヌーナ)や、神奈川フィルハーモニー管弦楽団、Bratislava Symphony Choirをはじめとした豪華なミュージシャンが多数参加している。" + ' \n ',
    img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    details: new Map([
        ['语言', 'C#,C++,Java,Python,Pascal,C,Go'],
        ['类型', '游戏'],
        ['状态', '进行中'],
    ]),
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
    }],
    labels: [{
        name: '游戏',
        id: 1,
    }, {
        name: '音乐',
        id: 2,
    }, {
        name: '动画',
        id: 3,
    }, {
        name: '小说',
        id: 4,
    }],
    totalScore: 10,
    scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
    votes: 0,
    characters: [{
        id: 1,
        name: '高橋哲哉',
        abstract: 'ゼノシリーズ監督',
        img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    }, {
        id: 1,
        name: '光田康典',
        abstract: 'ゼノシリーズ監督',
        img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    }, {
        id: 2,
        name: '工藤ともり',
        abstract: 'CHiCO',
        img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    }, {
        id: 2,
        name: '平松建治',
        abstract: 'CHiCO',
        img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    }, {
        id: 2,
        name: '清田愛未',
        abstract: 'CHiCO',
        img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    }]
}