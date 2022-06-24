import { Button, Form, Input, Modal, Space } from "@arco-design/web-react";
import React, { useEffect, useState } from "react";
import { IconCheck, IconSafe, IconUser } from "@arco-design/web-react/icon";

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
  formItem: React.ReactNode;
};

async function login(username: string, password: string) {
  // const response = await axios.post("/api/login", {username, password});
  // return response.data;
}

async function register(username: string, password: string) {
  // const response = await axios.post("/api/login", {username, password});
  // return response.data;
}

function LoginForm() {
  return (
    <>
      <Form.Item field="username" label="用户名" required>
        <Input prefix={<IconUser />} />
      </Form.Item>
      <Form.Item field="password" label="密码" required>
        <Input.Password prefix={<IconSafe />} />
      </Form.Item>
    </>
  );
}

function RegisterForm() {
  return (
    <>
      <Form.Item field="username" label="用户名" required>
        <Input prefix={<IconUser />} />
      </Form.Item>
      <Form.Item field="password" label="密码" required>
        <Input.Password prefix={<IconSafe />} />
      </Form.Item>
      <Form.Item field="confirmPassword" label="确认密码" required>
        <Input.Password prefix={<IconCheck />} />
      </Form.Item>
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
  const [submit, setSubmit] = useState<"login" | "register">(props.state.type);
  const [modalInfo, setModalInfo] = useState<ModalInfo>(
    props.state.type === "login" ? loginState : registerState
  );
  const [form] = Form.useForm();

  useEffect(() => {
    setSubmit(props.state.type);
    setModalInfo(props.state.type === "login" ? loginState : registerState);
  }, [props.state.visible]);

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
      >
        <Form
          form={form}
          onSubmit={() => console.log("s")}
          style={{ height: 200 }}
        >
          {modalInfo.formItem}
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
                await login(
                  form.getFieldsValue().username,
                  form.getFieldsValue().password
                );
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
                await register(
                  form.getFieldsValue().username,
                  form.getFieldsValue().password
                );
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
