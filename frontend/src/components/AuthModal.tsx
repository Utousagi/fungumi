import {Button, Form, Input, Message, Modal, Space} from "@arco-design/web-react";
import React, { ReactNode, useEffect, useState } from "react";
import { IconCheck, IconSafe, IconUser } from "@arco-design/web-react/icon";
import reduxStore from "@/redux/reduxStore";
import { userAction } from "@/redux/userSlice";
import axios from "axios";
import { UserInfo } from "@/axios/types";
import { useLocation, useNavigate } from "react-router-dom";

type AuthModalProps = {
  state: {
    visible: boolean;
    type: "login" | "register";
  };
  setState: (state: { visible: boolean; type: "login" | "register" }) => void;
};

type ModalInfo = {
  title: string;
  loginButtonTheme: "primary" | "secondary";
  registerButtonTheme: "primary" | "secondary";
  formItem: ReactNode;
};

async function login(username: string, password: string) {
  console.log("login");
  const res = await axios.post("user/login", { username, password });
  const data: UserInfo = res.data.data;
  if (data.hasLogin) {
    reduxStore.dispatch(
      userAction.login({
        id: data.id,
        name: data.username,
        avatar: data.avatar,
      })
    );
  }
  return [res.data.success, res.data.message];
}

async function register(username: string, password: string) {
  const res = await axios.post("user/register", { username, password });
  const data: UserInfo = res.data.data;
  if (data.hasLogin) {
    reduxStore.dispatch(
      userAction.login({
        id: data.id,
        name: data.username,
        avatar: data.avatar,
      })
    );
  }
  return [res.data.success, res.data.message];
}

function LoginForm() {
  return (
    <>
      <Form.Item
        field="username"
        label="用户名"
        required
        requiredSymbol={{ position: "end" }}
        rules={[{ required: true, maxLength: 12 }]}
      >
        <Input prefix={<IconUser />} />
      </Form.Item>
      <Form.Item
        field="password"
        label="密码"
        required
        requiredSymbol={{ position: "end" }}
        rules={[
          {
            required: true,
            minLength: 6,
            maxLength: 18,
            match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/,
          },
        ]}
      >
        <Input.Password prefix={<IconSafe />} />
      </Form.Item>
    </>
  );
}

function RegisterForm() {
  return (
    <>
      <Form.Item
        field="username"
        label="用户名"
        required
        requiredSymbol={{ position: "end" }}
        rules={[{ required: true, maxLength: 12 }]}
      >
        <Input prefix={<IconUser />} />
      </Form.Item>
      <Form.Item
        field="password"
        label="密码"
        required
        requiredSymbol={{ position: "end" }}
        rules={[
          {
            required: true,
            minLength: 6,
            maxLength: 18,
            match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/,
          },
        ]}
      >
        <Input.Password prefix={<IconSafe />} />
      </Form.Item>
      {/*<Form.Item*/}
      {/*  field="confirmPassword"*/}
      {/*  label="确认密码"*/}
      {/*  required*/}
      {/*  requiredSymbol={{ position: "end" }}*/}
      {/*  rules={[{}]}*/}
      {/*>*/}
      {/*  <Input.Password prefix={<IconCheck />} />*/}
      {/*</Form.Item>*/}
    </>
  );
}

const loginState: ModalInfo = {
  title: "登录",
  loginButtonTheme: "primary",
  registerButtonTheme: "secondary",
  formItem: <LoginForm />,
};
const registerState: ModalInfo = {
  title: "注册",
  loginButtonTheme: "secondary",
  registerButtonTheme: "primary",
  formItem: <RegisterForm />,
};

function AuthModal(props: AuthModalProps) {
  const nav = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [submit, setSubmit] = useState<"login" | "register">(props.state.type);
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo>(
    props.state.type === "login" ? loginState : registerState
  );
  const [form] = Form.useForm();

  useEffect(() => {
    setSubmit(props.state.type);
    setModalInfo(props.state.type === "login" ? loginState : registerState);
    form.clearFields();
  }, [props.state.visible]);

  useEffect(() => {
    form.clearFields();
    setErrorMessage("");
  }, [modalInfo]);

  return (
    <>
      <Modal
        visible={props.state.visible}
        title={modalInfo.title}
        footer={null}
        unmountOnExit
        maskClosable={true}
        closable={true}
        onCancel={() => {
          props.setState({ ...props.state, visible: false });
        }}
        confirmLoading={loading}
      >
        <Form
          form={form}
          style={{ height: 200 }}
          validateMessages={{
            required: (_: any, { label }: any) => `${label}不能为空`,
            string: {
              match: "密码必须包含字母和数字",
              minLength: "密码长度不能小于6",
              maxLength: "密码长度不能大于18",
            },
          }}
          onSubmit={async () => {
            setLoading(true);
            let success, message;
            if (submit === "login") {
              [success, message] = await login(
                form.getFieldsValue().username,
                form.getFieldsValue().password
              ).finally(() => setLoading(false));
            } else {
              [success, message] = await register(
                form.getFieldsValue().username,
                form.getFieldsValue().password
              ).finally(() => setLoading(false));
            }
            if (success) {
              props.setState({ ...props.state, visible: false });
              Message.info(props.state.type == "login" ? "登录成功" : "注册成功");
            } else {
              setErrorMessage(message);
            }
          }}
          onSelect={() => {
            setErrorMessage("");
          }}
        >
          {modalInfo.formItem}
          {errorMessage ? (
            <div style={{ color: "lightcoral", margin: "0 100px" }}>
              {errorMessage}
            </div>
          ) : null}
        </Form>
        <Space
          style={{ display: "flex", justifyContent: "space-evenly" }}
          size={-20}
        >
          <Button
            type={modalInfo.loginButtonTheme}
            style={{ width: 100, borderRadius: 5 }}
            onClick={async () => {
              if (submit === "login") {
                form.submit();
              } else {
                setModalInfo(loginState);
                setSubmit("login");
              }
            }}
          >
            登录
          </Button>
          <Button
            type={modalInfo.registerButtonTheme}
            style={{ width: 100, borderRadius: 5 }}
            onClick={async () => {
              if (submit === "register") {
                form.submit();
              } else {
                setModalInfo(registerState);
                setSubmit("register");
              }
            }}
          >
            注册
          </Button>
        </Space>
      </Modal>
    </>
  );
}

export default AuthModal;
