import React from "react";
import {Form, Input, Button, Typography} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
//import './styles/pages/login.scss'

export const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const {Title} = Typography;

  return (
    <div className="login-form-container">
      <div className="login-emblem">
        <div className="login-coat-of-arms-logo" />
        <div className="login-arm">
          <Title level={4}> АРМ </Title>
          <Title level={4}> ЦУП </Title>
        </div>
      </div>
      <Title level={4}> Добро пожаловать! </Title>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{required: true, message: "Введите ваш никнейм"}]}
        >
          <Input
            suffix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Ваш никнейм, эл.почта, телефон"
          />
        </Form.Item>
        <Form.Item name="password" rules={[{required: true, message: "Введите пароль"}]}>
          <Input
            suffix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="******"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            ВОЙТИ
          </Button>
          <div className="login-form-support">
            <a className="login-form-support-link" href="">
              Техническая поддержка
            </a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
