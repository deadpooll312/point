import React, {useCallback} from "react";
import {inject, observer} from "mobx-react";
import {Button, Form, Input, Typography} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
const {Title} = Typography;

export const LoginForm = inject("store")(
  observer(({store: {auth}}) => {
    const onFinish = useCallback(
      (values) => {
        auth.login(values);
      },
      [auth]
    );

    return (
      <div className="login-form-container">
        <div className="login-emblem">
          <div className="login-coat-of-arms-logo" />
          <div className="login-arm">
            <h2 className="login-arm-name"> Ситуационный Центр</h2>
            <h2 className="login-arm-name"> ПАРК </h2>
          </div>
        </div>
        <div className="login-divider-wrap">
          <div className="login-divider"></div>
        </div>
        <Title level={4}> Добро пожаловать! </Title>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{remember: true}}
          onFinish={onFinish}
        >
          <Form.Item
            name="login"
            rules={[{required: true, message: "Введите ваш логин"}]}
          >
            <Input
              suffix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Ваш никнейм, эл.почта, телефон"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{required: true, message: "Введите пароль"}]}
          >
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
              <a
                className="login-form-support-link"
                href="mailto:helpdesk-monitor@mos.ru"
              >
                Техническая поддержка
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  })
);
