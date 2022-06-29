import { CommentData, FavouriteData, getUserInfoPage, InfoPageData } from "@/axios/User";
import { RootState } from "@/redux/reduxStore";
import {
  Button,
  Layout,
  Image,
  Tag,
  Divider,
  Modal,
  Form,
  Input,
  Message,
} from "@arco-design/web-react";
import FormItem from "@arco-design/web-react/es/Form/form-item";
import Content from "@arco-design/web-react/es/Layout/content";
import Sider from "@arco-design/web-react/es/Layout/sider";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CommentShow } from "../../components/CommentShow";

function InfoFavourite(props: { favourite: FavouriteData }) {
  return (
    <>
      <Layout style={{ width: "190px", margin: "5px" }}>
        <Sider style={{ width: "80px", textAlign: "center" }}>
          <Link to={"/subject/" + props.favourite.id}>
            <Image height={80} src={props.favourite.picture} />
          </Link>
        </Sider>
        <Content style={{ display: "contents" }}>
          <div style={{ display: "flow", margin: "0px 0px 0px 5px" }}>
            <div style={{ wordWrap: "break-word", wordBreak: "break-word" }}>
              {props.favourite.title}
            </div>
            <Tag>{props.favourite.category}</Tag>
          </div>
        </Content>
      </Layout>
      <Divider />
    </>
  );
}

export default function Info() {
  const id = Number(useParams().id);

  var state = useSelector((state: RootState) => state.user);
  console.log(state);

  const isSelf = useSelector((state: RootState) => state.user.id) === id;

  const identity: string = isSelf ? "我的" : "个人";

  const [description, setDescription] = useState(" ");
  const [favoriteList, setFavoriteList] = useState<FavouriteData[]>([]);
  const [commentList, setCommentList] = useState<CommentData[]>([]);
  const [likeList, setLikeList] = useState<CommentData[]>([]);

  useEffect(() => {
    getUserInfoPage(id).then((data) => {
      setDescription(data.description);
      if (data.favorites) setFavoriteList(data.favorites);
      if (data.comments) setCommentList(data.comments);
      if (data.likes) setLikeList(data.likes);
      console.log(data);
    });
  }, []);


  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  function onOK() {
    form.validate().then((values) => {
      setConfirmLoading(true);
      setTimeout(() => {
        Message.success("提交成功");
        setConfirmLoading(false);
        setVisible(false);
      }, 1500);
    });
  }

  return (
    <Layout>
      <Modal
        title="修改简介"
        visible={visible}
        onOk={onOK}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
      >
        <Form form={form} wrapperCol={{ span: 24 }}>
          <FormItem field={"description"} rules={[{ required: false }]}>
            <Input.TextArea rows={3} />
          </FormItem>
        </Form>
      </Modal>
      <Content style={{ display: "flex", textAlign: "left" }}>
        <div
          style={{
            width: "98%",
            border: "3px solid pink",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: "95%",
              display: "block",
              margin: "5px 20px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {identity}简介
            {isSelf ? (
              <Button
                shape={"round"}
                style={{ marginTop: "5px", float: "right" }}
                onClick={() => {
                  setVisible(true);
                }}
              >
                +
              </Button>
            ) : null}
          </div>
          <div style={{ margin: "8px 15px" }}>
            {description == ""
              ? "这个用户什么都没有写哦"
              : description}
          </div>
        </div>
        <div
          style={{
            width: "95%",
            display: "block",
            margin: "30px 20px 0px 20px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {identity}评论
        </div>
        {commentList.map((review: CommentData) => {
          return <CommentShow data={review} />;
        })}
        <div
          style={{
            width: "95%",
            display: "block",
            margin: "30px 20px 0px 20px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {identity}点赞
        </div>
        {likeList.map((review: CommentData) => {
          return <CommentShow data={review} />;
        })}
      </Content>
      <Sider
        style={{
          display: "flex",
          textAlign: "left",
          border: "3px solid pink",
          borderRadius: "10px",
        }}
      >
        <div
          style={{ margin: "5px 20px", fontSize: "24px", fontWeight: "bold" }}
        >
          {identity}收藏
        </div>
        {favoriteList.map((favourite: FavouriteData) => {
          return <InfoFavourite favourite={favourite} />;
        })}
      </Sider>
    </Layout>
  );
}
