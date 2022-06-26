import { Grid, Layout, Image, Link, Divider, Pagination } from "@arco-design/web-react";
import Content from "@arco-design/web-react/es/Layout/content";
import Header from "@arco-design/web-react/es/Layout/header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { UserData, UserMenu } from "./UserFavourite";
import { CommentData, CommentShow } from "./CommentShow";

type ReviewPageData = {
	user: UserData;
	total: number;
	reviews: CommentData[];
}

const data2 : CommentData[] = [{
	userId: "Abigail",
	avator:
		"https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
	score: 7,
	time: "Now",
	content:
		"可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
	like: false,
	dislike: false,
	likes: 233,
},{
	userId: "Abigail",
	avator:
		"https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
	score: 7,
	time: "Now",
	content:
		"可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
	like: false,
	dislike: false,
	likes: 233,
},]

const data: UserData = {
	UserId: "ZeesangPie",
	avater: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
}

const data3: ReviewPageData = {
	user: data,
	total: 22,
	reviews: data2
}

export default function Likes(props: { page?: number } = { page: 1 }) {
	const id = useParams().id;
	const userUrl = "/user/" + id;
	const select = "like";
	var [reviewList, setReviewList] = useState(data3.reviews);

	return (
		<div style={{ display: 'block', width:'1800px' }}>
			<Layout style={{ width: "95%" }}>
				<Header
					style={{
						width: "105%",
						alignSelf: "center",
						alignItems: "start",
						height: "100%",
					}}
				>
					<Grid.Row style={{ width: '95%' }}>
						<Grid.Col span={4} style={{ alignContent: 'center' }}>
							<Image width={180} height={180} src={data.avater} style={{}} />
						</Grid.Col>
						<Grid.Col span={16} style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
							<Link href={userUrl} style={{ fontSize: '48px', margin: '4px 10px' }}>{data.UserId}</Link>
							<Divider style={{ marginTop: '2px' }} />
							<UserMenu select={select} />
						</Grid.Col>
					</Grid.Row>
				</Header>
				<Layout>
					<Content style={{}}>
						<Grid.Row style={{ width: '100%' }}>
							<Grid.Col offset={3} span={18} style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
								{reviewList.map((review:CommentData) => {
									return <CommentShow {...review} />
								})}					
							</Grid.Col>
						</Grid.Row>
						<Pagination
									total={data3.total}
									defaultPageSize={10}
									defaultCurrent={props.page}
									onChange={(pageNumber: number) => {
										setReviewList(
											data3.reviews.slice((pageNumber - 1) * 10, pageNumber * 10)
										);
									}}
									style={{ marginTop: "10px" }}
								/>
					</Content>
				</Layout>
			</Layout>
		</div>
	);
}