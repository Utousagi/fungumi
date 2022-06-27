import { CommentData, InfoPageData } from "@/axios/User";
import { Button, Layout, Image, Tag, Divider, Modal, Form, Input, Message } from "@arco-design/web-react";
import FormItem from "@arco-design/web-react/es/Form/form-item";
import Content from "@arco-design/web-react/es/Layout/content";
import Sider from "@arco-design/web-react/es/Layout/sider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CommentShow } from "../../components/CommentShow";
import { FavouriteData } from "./UserFavourite";



const data: InfoPageData = {
	id: 1,
	description: "职阶降临者（Foreigner），在亚种特异点 Ⅳ 禁忌降临庭园 塞勒姆 异端塞勒姆登场。名为阿比盖尔的同名角色为历史上美国塞勒姆审巫案的关键角色，并被多部影视作品改编。本作的阿比盖尔是魔神柱劳姆以史实为基础创造出的架空人格。",
	likes: [{
		userId: 1,
		username: "Abigail",
		avatar:
			"https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
		score: 7,
		time: "Now",
		content:
			"可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
		islike: false,
		likes: 233,
	}, {
		userId: 1,
		username: "Abigail",
		avatar:
			"https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
		score: 7,
		time: "Now",
		content:
			"可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
		islike: false,
		likes: 233,
	},],
	reviews: [{
		userId: 1,
		username: "Abigail",
		avatar:
			"https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
		score: 7,
		time: "Now",
		content:
			"可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
		islike: false,
		likes: 233,
	}, {
		userId: 1,
		username: "Abigail",
		avatar:
			"https://library.galgame.pw/api/v3/file/source/15362/%E3%82%A2%E3%83%93%E3%82%B2%E3%82%A4%E3%83%AB_66234423.jpg?sign=5SUh66iyzyZSCQO-NeesfNUYop9eGbazYGCjvjrXRQo%3D%3A0",
		score: 7,
		time: "Now",
		content:
			"可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏,可爱滴捏",
		islike: false,
		likes: 233,
	},],
	favourites: [{
		id: "1",
		name: "cowboy beeeeeeeeeeeeeeeeeebop",
		workType: "动画",
		image: "/src/assets/keep.jpg",
		type: "想看",
		rate: 3.5,
		votes: 233,
		description: "本作的主人公。体型消瘦，留着一头类似爆炸头的头发，是Bebop号上的最早成员之一。\n在赏金猎人的工作中，因为懂得类似李小龙截拳道的武术，常担任战斗前线的罪犯逮捕工作，在驾驶经过改装的红色高速战机「剑鱼II」（ソードフィッシュII）时也表现出了过人的水准，喜欢使用的手枪是经过改造的Jericho941。\n以李小龙为偶像的斯派克自己也是截拳道的高手。三年前为了离开黑社会组织「红龙」曾经一度游走在生死边缘。\n现在和杰特一起乘坐着「比博普」号，过着穷困潦倒的日子。对于自己的过去，斯派克不愿意对别人详细提起。虽然已经从黑道引退却仍然过着吊儿郎当的生活。\n以前的经历使得他总是过分自信，老是做一些火中取栗的事情，屡次身陷险境。"
	}, {
		id: "1",
		name: "cowboy bebop",
		workType: "动画",
		image: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
		type: "想看",
		rate: 3.5,
		votes: 233,
		description: "本作的主人公。体型消瘦，留着一头类似爆炸头的头发，是Bebop号上的最早成员之一。\n在赏金猎人的工作中，因为懂得类似李小龙截拳道的武术，常担任战斗前线的罪犯逮捕工作，在驾驶经过改装的红色高速战机「剑鱼II」（ソードフィッシュII）时也表现出了过人的水准，喜欢使用的手枪是经过改造的Jericho941。\n以李小龙为偶像的斯派克自己也是截拳道的高手。三年前为了离开黑社会组织「红龙」曾经一度游走在生死边缘。\n现在和杰特一起乘坐着「比博普」号，过着穷困潦倒的日子。对于自己的过去，斯派克不愿意对别人详细提起。虽然已经从黑道引退却仍然过着吊儿郎当的生活。\n以前的经历使得他总是过分自信，老是做一些火中取栗的事情，屡次身陷险境。"
	}, {
		id: "1",
		name: "cowboy bebop",
		workType: "音乐",
		image: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
		type: "想看",
		rate: 3.5,
		votes: 233,
		description: "本作的主人公。体型消瘦，留着一头类似爆炸头的头发，是Bebop号上的最早成员之一。\n在赏金猎人的工作中，因为懂得类似李小龙截拳道的武术，常担任战斗前线的罪犯逮捕工作，在驾驶经过改装的红色高速战机「剑鱼II」（ソードフィッシュII）时也表现出了过人的水准，喜欢使用的手枪是经过改造的Jericho941。\n以李小龙为偶像的斯派克自己也是截拳道的高手。三年前为了离开黑社会组织「红龙」曾经一度游走在生死边缘。\n现在和杰特一起乘坐着「比博普」号，过着穷困潦倒的日子。对于自己的过去，斯派克不愿意对别人详细提起。虽然已经从黑道引退却仍然过着吊儿郎当的生活。\n以前的经历使得他总是过分自信，老是做一些火中取栗的事情，屡次身陷险境。"
	}]
}

function InfoFavourite(props: { favourite: FavouriteData }) {
	return (
		<>
			<Layout style={{ width: '190px', margin: '5px' }}>
				<Sider style={{ width: '80px', textAlign: 'center' }}>
					<Link to={"/subject/" + props.favourite.id}><Image height={80} src={props.favourite.image} /></Link>
				</Sider>
				<Content style={{ display: 'contents' }}>
					<div style={{ display: 'flow', margin: '0px 0px 0px 5px' }}>
						<div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
							{props.favourite.name}
						</div>
						<Tag>
							{props.favourite.workType}
						</Tag>
					</div>
				</Content>
			</Layout>
			<Divider />
		</>
	)
}



export default function Info() {
	const isSelf: boolean = true;
	const identity: string = isSelf ? "我的" : "个人";

	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [form] = Form.useForm();

	function onOK() {
		form.validate().then(values => {
			setConfirmLoading(true);
			setTimeout(() => {
				Message.success('提交成功');
				setConfirmLoading(false);
				setVisible(false);
			}, 1500);
		});
	}

	return (
		<Layout>
			<Modal
				title='修改简介'
				visible={visible}
				onOk={onOK}
				confirmLoading={confirmLoading}
				onCancel={() => setVisible(false)}
			>
				<Form
					form={form}
					wrapperCol={{ span: 24 }}
				>
					<FormItem field={'description'} rules={[{ required: false }]}>
						<Input.TextArea rows={3} />
					</FormItem>
				</Form>
			</Modal>
			<Content style={{ display: 'flex', textAlign: 'left' }}>
				<div style={{ width: '98%', border: '3px solid pink', borderRadius: '10px' }}>
					<div style={{ width: '95%', display: 'block', margin: '5px 20px', fontSize: '24px', fontWeight: 'bold' }}>
						{identity}简介
						{isSelf ? (<Button shape={'round'} style={{ marginTop: '5px', float: 'right' }} onClick={() => { setVisible(true) }}>+</Button>) : (null)}
					</div>
					<div style={{ margin: '8px 15px' }}>
						{data.description == '' ? '这个用户什么都没有写哦' : data.description}
					</div>
				</div>
				<div style={{ width: '95%', display: 'block', margin: '30px 20px 0px 20px', fontSize: '24px', fontWeight: 'bold' }}>
					{identity}评论
				</div>
				{data.reviews.map((review: CommentData) => {
					return (
						<CommentShow data={review} />
					)
				})}
				<div style={{ width: '95%', display: 'block', margin: '30px 20px 0px 20px', fontSize: '24px', fontWeight: 'bold' }}>
					{identity}点赞
					{/* <Link to={jumpUrl+'/like'} style={{ marginTop: '5px', float: 'right', font:'' }}>(more)</Link> */}
				</div>
				{data.likes.map((review: CommentData) => {
					return (
						<CommentShow data={review} />
					)
				})}
			</Content>
			<Sider style={{ display: 'flex', textAlign: 'left', border: '3px solid pink', borderRadius: '10px' }}>
				<div style={{ margin: '5px 20px', fontSize: '24px', fontWeight: 'bold' }}>
					{identity}收藏
				</div>
				{data.favourites.map((favourite: FavouriteData) => {
					return (
						<InfoFavourite favourite={favourite} />
					)
				})}
			</Sider>
		</Layout>
	)
}